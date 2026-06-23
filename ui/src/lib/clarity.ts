const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();
const ENABLE_CLARITY_IN_DEV =
  import.meta.env.VITE_ENABLE_CLARITY_IN_DEV === "true";

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[] };

let clarityApi: ClarityFunction | undefined;
let clarityApiWatcher: number | undefined;

function getClarityApi() {
  if (typeof window === "undefined") return clarityApi;

  if (typeof window.clarity === "function") {
    clarityApi = window.clarity;
  }

  return clarityApi;
}

function watchForClarityApi() {
  if (clarityApiWatcher || typeof window === "undefined") return;

  const startedAt = Date.now();

  clarityApiWatcher = window.setInterval(() => {
    getClarityApi();

    if (Date.now() - startedAt > 10000) {
      window.clearInterval(clarityApiWatcher);
      clarityApiWatcher = undefined;
    }
  }, 250);
}

export function initClarity() {
  if (!CLARITY_PROJECT_ID) return;
  if (!import.meta.env.PROD && !ENABLE_CLARITY_IN_DEV) return;
  if (typeof window === "undefined") return;
  if (window.clarity) {
    clarityApi = window.clarity;
    return;
  }

  window.clarity = function (...args: unknown[]) {
    (window.clarity!.q = window.clarity!.q || []).push(args);
  } as ClarityFunction;
  clarityApi = window.clarity;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(script);
  watchForClarityApi();
}

export function trackClarityEvent(eventName: string) {
  const api = getClarityApi();
  if (!api) return;

  api("event", eventName);
}

export function trackCtaClick({
  block,
  eventName,
  intent = "contact",
  label,
}: {
  block: string;
  eventName: string;
  intent?: "contact" | "creator_app" | "planner" | "social";
  label: string;
}) {
  trackClarityEvent("cta_click");
  trackClarityEvent(`cta_intent_${intent}`);
  trackClarityEvent(eventName);
  trackClarityEvent(`cta_block_${block}`);
  trackClarityEvent(`cta_label_${label}`);
}
