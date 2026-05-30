import { cn } from "@/lib/utils";

export function AnimatedArrowIcon({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("stripe-arrow-icon", className)}>
      <svg fill="none" viewBox="0 0 10 10">
        <path
          className="stripe-arrow-icon__shaft"
          d="M0 5h7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="stripe-arrow-icon__head"
          d="M1 1l4 4-4 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
