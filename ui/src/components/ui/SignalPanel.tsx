import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type SignalPanelProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  innerClassName?: string;
  style?: CSSProperties;
  variant?: "shell" | "frame";
};

export function SignalPanel({
  children,
  className,
  innerClassName,
  style,
  variant = "shell",
  onPointerLeave,
  onPointerMove,
  ...props
}: SignalPanelProps) {
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    panel.style.setProperty("--signal-panel-pointer-x", `${x.toFixed(2)}%`);
    panel.style.setProperty("--signal-panel-pointer-y", `${y.toFixed(2)}%`);
    panel.style.setProperty("--signal-panel-hover", "1");

    onPointerMove?.(event);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    const panel = event.currentTarget;

    panel.style.setProperty("--signal-panel-pointer-x", "50%");
    panel.style.setProperty("--signal-panel-pointer-y", "50%");
    panel.style.setProperty("--signal-panel-hover", "0");

    onPointerLeave?.(event);
  };

  if (variant === "frame") {
    return (
      <div
        className={cn("signal-gray-panel-frame overflow-hidden", className)}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        {...props}
        style={style}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn("signal-gray-panel", className)}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      {...props}
      style={style}
    >
      {innerClassName ? (
        <div className={cn("h-full overflow-hidden", innerClassName)}>
          {children}
        </div>
      ) : children}
    </div>
  );
}
