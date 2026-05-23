# Wallchain UI Design System

This website should feel like one focused product: dark, data-driven, precise, and premium. New sections should reuse the tokens and helpers in `src/lib/ui-system.ts`, `src/lib/section-typography.ts`, `src/index.css`, and `tailwind.config.ts`.

## Foundations

Typography:
- Display font: `font-display` for hero, section, and card titles.
- Body font: `font-sans` for all readable text and UI labels.
- Scale: `text-hero-title`, `text-section-title`, `text-card-title`, `text-body-lg`, `text-body`, `text-caption`, `text-label`.
- Letter spacing stays `0` except uppercase labels, which use `tracking-label`.
- Avoid arbitrary text values such as `text-[19px]` unless the element is a fixed-size visual artifact.

Colors:
- Use semantic Tailwind tokens: `bg-surface-page`, `bg-surface`, `bg-surface-muted`, `bg-surface-strong`, `text-text-primary`, `text-text-secondary`, `text-text-muted`, `border-border`, `text-accent`, `bg-accent`, `text-success`, `text-warning`, `text-error`.
- Do not introduce raw hex or RGB values in product UI. Keep special brand colors in `ui.colors` or CSS variables first.
- CTAs use `yellow-cta` for the primary action and `outline-cta` for secondary actions.

Spacing:
- Use the project scale: `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `section-sm`, `section`, `section-lg`, `card`, `card-lg`.
- Avoid arbitrary spacing like `mt-[37px]`, `gap-[22px]`, or `pb-[51px]`.
- Section padding defaults to `ui.layout.section`; denser transitions use `ui.layout.sectionCompact`.

## Outer Spacing > Inner Spacing

Proximity defines relationship.

- Title to subtitle: small gap, usually `gap-3` or `mt-4`.
- Subtitle to CTA or content grid: larger gap, usually `mt-8` or `mt-10`.
- Card padding: medium, usually `p-card`.
- Gap between cards: larger than internal card gaps, usually `gap-5` or `gap-6`.
- Gap between sections: largest, provided by `py-section` or `py-section-sm`.

When a UI feels wrong, check spacing hierarchy before changing color or typography.

## Layout

Containers:
- Default page container: `ui.layout.container` (`max-w-container`, 1280px).
- Readable text container: `ui.layout.containerReadable` or `max-w-readable`.
- Avoid adding new max widths unless the section has a real composition need.

Sections:
- Use `ui.layout.section`, `ui.layout.sectionCompact`, or `ui.layout.sectionAlt`.
- Section headers use `ui.layout.header` or `ui.layout.headerWithCopy`.
- Keep section title, subtitle, and CTA alignment predictable.

Grids:
- Repeated content cards should use consistent gaps (`gap-5` or `gap-6`).
- Inner rows inside cards should use smaller gaps (`gap-2`, `gap-3`, `gap-4`).
- Mobile layouts should stack without text overlap or horizontal scroll, except intentional tab strips.

## Components

Buttons and links:
- Use `ui.component.ctaBase` plus `ui.component.ctaPrimary` or `ui.component.ctaSecondary`.
- Primary CTA appears once per decision area. Secondary CTAs are visually quieter.
- Keep button height at `min-h-11` and use icon plus text when the action benefits from motion or direction.

Cards and panels:
- Use `ui.component.panel` for dark interactive panels.
- Use `rounded-card`, `shadow-card`, and `border-border` for standard cards.
- Do not nest cards inside cards unless the inner element is a real control or data module.

Labels:
- Use `sectionEyebrowClass` for section eyebrows and `ui.component.labelPill` for pill labels.
- Labels are uppercase, mono, and muted. They should never compete with titles.

## Adding New Blocks

1. Start with `ui.layout.section` and `ui.layout.container`.
2. Add a header using `sectionEyebrowClass`, `sectionTitleClass`, and `sectionSubtitleClass`.
3. Place content with larger outer spacing than inner spacing.
4. Use semantic color tokens and component helpers before writing custom classes.
5. Only add one-off values for deliberate geometry, animation math, or fixed visual diagrams.
6. Check desktop and mobile before shipping.

## Guardrails

- No random colors.
- No random spacing values.
- No one-off typography without a clear reason.
- No competing CTA styles.
- No new container widths without a composition reason.
- Use semantic tokens first, utilities second, arbitrary values last.
