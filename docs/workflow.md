# Workflow

## Current live-site workflow

The active website lives in `ui/`.

Use this flow for all new blocks, copy changes, and design iterations:

1. Create a separate branch for the change.
2. Make edits only in `ui/` unless the task explicitly targets docs or deployment configuration.
3. Push the branch and use the Vercel Preview Deployment URL for founder/team review.
4. Apply feedback on the same branch so the preview link keeps updating.
5. After approval, merge the branch into `main` or promote the approved preview deployment to production.

Do not push unfinished website changes directly to `main`.

## 1. Wireframe work

The `v1.x` versions are archived historical wireframes. They can be read for context, but should not be edited during normal site work.

Use archived wireframes only when explicitly revisiting:

- structure
- message
- block order
- interaction logic
- persuasion flow

## 2. UI work

Use `ui/` when turning approved ideas into the live implementation.

`v1.1-ui` is also historical and should stay untouched unless explicitly requested.

UI work should:

- keep the approved structure
- remove wireframe-only plumbing
- use the cleaner component set
- stay ready for handoff

## 3. Handoff preparation

Before handing off to developers:

- freeze the UI version
- export only the clean UI build
- exclude wireframe history and demo-only logic
- verify navigation and page order

## 4. Version discipline

- one thread or task per intent
- one version line per stage
- wireframe and UI edits should not be mixed unless the task explicitly says so
- archived wireframes should not receive copy/content fixes meant for the live site
