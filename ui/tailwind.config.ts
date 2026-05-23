import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-page": "hsl(var(--surface-page))",
        surface: "hsl(var(--surface))",
        "surface-muted": "hsl(var(--surface-muted))",
        "surface-strong": "hsl(var(--surface-strong))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        cta: "var(--radius-cta)",
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        panel: "var(--shadow-panel)",
        nav: "var(--shadow-nav)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Bai Jamjuree",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        label: ["0.75rem", { lineHeight: "1rem" }],
        caption: ["0.8125rem", { lineHeight: "1.25rem" }],
        body: ["0.9375rem", { lineHeight: "1.5rem" }],
        "body-lg": ["1rem", { lineHeight: "1.75rem" }],
        "card-title": ["1.25rem", { lineHeight: "1.625rem" }],
        "section-title": ["clamp(1.875rem, 3.75vw, 3rem)", { lineHeight: "1.12" }],
        "hero-title": ["clamp(3rem, 5.625vw, 4.5rem)", { lineHeight: "1.04" }],
      },
      letterSpacing: {
        label: "0.16em",
      },
      lineHeight: {
        section: "1.08",
        body: "1.72",
      },
      maxWidth: {
        container: "80rem",
        readable: "48rem",
        "content-wide": "61.25rem",
      },
      spacing: {
        section: "5rem",
        "section-sm": "4rem",
        "section-lg": "6rem",
        card: "1.5rem",
        "card-lg": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
