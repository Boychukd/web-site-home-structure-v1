# Wallchain Select

This repo has two tracks:

- **Archived wireframe track**: `v1.0` through `v1.4`
- **Active UI track**: the clean `ui/` implementation

Use the wireframes only as historical reference. Use `ui/` for the live website, preview deployments, production releases, and handoff-ready work.

## Start here

1. Open `index.html` for the password gateway.
2. Use the version links to enter the wireframe builds.
3. Read the docs in `docs/` before making structural changes.
4. Put implementation work in `ui/`, not inside the wireframe versions.
5. For local React setup and two-computer sync, read `docs/local-setup-and-sync.md`.

## Repo map

- `index.html` - locked gateway page
- `v1.0` - early wireframe history
- `v1.1` - wireframe iteration
- `v1.1-ui` - first separate UI pass, now historical
- `v1.2`, `v1.3`, `v1.4` - later wireframe iterations
- `ui/` - active website implementation
- `docs/` - architecture, workflow, and handoff notes

## Working rule

Wireframe files are archived and should stay untouched unless the task explicitly asks to revisit them.
All current website changes should happen in `ui/`, then be reviewed through a preview deployment before production.
