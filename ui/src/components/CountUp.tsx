import { useInView, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  /**
   * Force a fixed number of decimal places. When omitted the component
   * derives it from the `from` and `to` props (same behaviour as React Bits).
   */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  style?: CSSProperties;
  onStart?: () => void;
  onEnd?: () => void;
}

/**
 * CountUp — based on the React Bits component, adapted to:
 *  1. Re-trigger the spring animation every time `to` changes (so values
 *     animate up *and* down when the surrounding state updates).
 *  2. Allow forcing a fixed number of decimals and rendering a prefix/suffix
 *     without breaking the animated digits in between.
 */
export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 1,
  className = "",
  startWhen = true,
  separator = "",
  decimals,
  prefix = "",
  suffix = "",
  style,
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const hasStartedRef = useRef(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimalsPart = str.split(".")[1];
      if (parseInt(decimalsPart) !== 0) {
        return decimalsPart.length;
      }
    }
    return 0;
  };

  const maxDecimals =
    decimals !== undefined
      ? decimals
      : Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };
      const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);
      const withSep = separator
        ? formattedNumber.replace(/,/g, separator)
        : formattedNumber;
      return `${prefix}${withSep}${suffix}`;
    },
    [maxDecimals, separator, prefix, suffix]
  );

  // Set initial text content once on mount.
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === "down" ? to : from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drive the spring whenever the section enters view or `to` changes after.
  useEffect(() => {
    if (!startWhen) return;
    if (!isInView && !hasStartedRef.current) return;
    hasStartedRef.current = true;
    if (typeof onStart === "function") onStart();
    const timeoutId = setTimeout(() => {
      motionValue.set(direction === "down" ? from : to);
    }, delay * 1000);
    const durationTimeoutId = setTimeout(
      () => {
        if (typeof onEnd === "function") onEnd();
      },
      delay * 1000 + duration * 1000
    );
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(durationTimeoutId);
    };
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    duration,
    onStart,
    onEnd,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} style={style} />;
}
