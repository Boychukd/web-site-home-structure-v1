import { cn } from "@/lib/utils";

export function AnimatedArrowIcon({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("stripe-arrow-icon", className)}>
      <svg fill="none" viewBox="0 0 18 16">
        <path
          className="stripe-arrow-icon__shaft"
          d="M2 8H8.5"
          pathLength={1}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          className="stripe-arrow-icon__head"
          d="M6 4.5L10 8L6 11.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}
