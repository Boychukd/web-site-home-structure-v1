import { cn } from "@/lib/utils";

export function AnimatedArrowIcon({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("stripe-arrow-icon", className)}>
      <svg fill="none" viewBox="0 0 10 10">
        <path
          className="stripe-arrow-icon__shaft"
          d="M0 5H7"
          pathLength={1}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          className="stripe-arrow-icon__head"
          d="M3 1L7 5L3 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
