# Wallchain Select UI

This folder is the clean handoff UI project for Wallchain Select.

The wireframe history lives outside this folder in `v1.x`. Keep this project free of encrypted previews, password gates, version switchers, and demo-only scripts.

## Setup

```bash
npm install
```

Create a local env file from the example:

```bash
cp .env.example .env.local
```

Add the ReactBits Pro license key in `.env.local`:

```bash
REACTBITS_LICENSE_KEY="your-license-key"
```

Do not commit `.env.local`.

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## ReactBits Pro

ReactBits Pro is configured through the shadcn registry in `components.json`.

Install Tailwind component variants with:

```bash
npx shadcn@latest add @reactbits-starter/component-slug-tw
```

Install Pro or Ultimate blocks with:

```bash
npx shadcn@latest add @reactbits-pro/block-slug
```

Installed ReactBits files should land inside `src/components`, so they travel with this `ui/` folder when handed off.

## Handoff

Send this `ui/` folder as the client-facing package. Include source files, `package.json`, `package-lock.json`, `components.json`, and this README. Exclude `node_modules/`, `.env.local`, and `dist/` unless the client specifically asks for a prebuilt static output.
