# Architecture

Wallchain Select is organized as versioned landing page builds plus a clean UI track.

## Tracks

- **Wireframe track**: the product logic, block ordering, and copy testing layer.
- **UI track**: the cleaner implementation layer for the version that gets shared externally.

## Version logic

- `v1.0` to `v1.4` are preserved as wireframe history.
- `v1.1-ui` is the first UI-specific pass.
- `ui/` is the future clean staging area for the next UI build and later handoff package.

## Block model

Each landing page section should be treated as a block:

- hero
- pain
- niche explainer
- calculator
- proof band
- creator demo
- testimonials
- final CTA
- about
- FAQ

Blocks should be portable:

- move them without rewriting the whole page
- hide or duplicate them when needed
- keep them isolated enough to rebuild in UI later

## Boundary rule

Wireframe files are for internal iteration.
UI files are for the clean shared result.
The handoff bundle should not include experimental wireframe code.

