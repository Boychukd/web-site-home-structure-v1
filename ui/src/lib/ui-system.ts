export const ui = {
  colors: {
    accent: "#f7d133",
    accentHover: "#ffdc4d",
    background: "#020202",
    surface: "#101010",
    surfaceMuted: "#171717",
    textPrimary: "#ffffff",
    textSecondary: "#c7c7c7",
    textMuted: "#737373",
    border: "rgb(255 255 255 / 0.1)",
    success: "#71f0c4",
    warning: "#fbbf24",
    error: "#fca5a5",
  },
  layout: {
    section: "bg-surface-page px-4 py-section text-text-primary sm:px-6 lg:px-8",
    sectionCompact: "bg-surface-page px-4 py-section-sm text-text-primary sm:px-6 lg:px-8",
    sectionAlt: "bg-surface-page px-4 py-section text-text-primary sm:px-6 lg:px-8",
    container: "mx-auto w-full max-w-container",
    containerReadable: "mx-auto w-full max-w-readable",
    header: "flex flex-col items-center gap-3 text-center",
    headerWithCopy: "flex flex-col items-center gap-4 text-center",
  },
  component: {
    panel: "signal-gray-panel rounded-card p-card",
    card: "rounded-card border border-border bg-surface text-text-primary shadow-card",
    ctaBase:
      "stripe-arrow-cta inline-flex min-h-11 items-center justify-center gap-2 rounded-cta px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ctaPrimary: "yellow-cta",
    ctaSecondary: "outline-cta",
    labelPill:
      "inline-flex items-center gap-2 rounded-cta bg-surface-strong px-3 py-1.5 font-mono text-label font-medium uppercase tracking-label text-text-secondary",
  },
} as const;
