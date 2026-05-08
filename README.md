# Wallchain Select

This repo has two tracks:

- **Wireframe track**: `v1.0` through `v1.4`
- **UI track**: `v1.1-ui` and the clean `ui/` staging area

Use the wireframes to shape structure, logic, copy, and block order. Use the UI track to build the handoff-ready version that can be shared with developers or exported as a clean package.

## Start here

1. Open `index.html` for the password gateway.
2. Use the version links to enter the wireframe builds.
3. Read the docs in `docs/` before making structural changes.
4. Put clean implementation work in `ui/`, not inside the wireframe versions.

## Repo map

- `index.html` - locked gateway page
- `v1.0` - early wireframe history
- `v1.1` - wireframe iteration
- `v1.1-ui` - first separate UI pass
- `v1.2`, `v1.3`, `v1.4` - later wireframe iterations
- `ui/` - clean UI staging area for future handoff work
- `docs/` - architecture, workflow, and handoff notes

## Working rule

Wireframe changes should stay isolated from the clean UI output.
When a block is approved in wireframe, it can be rebuilt in UI without bringing the wireframe plumbing forward.

