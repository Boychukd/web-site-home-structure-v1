# Workflow

## Current live-site workflow

The active website lives in `ui/`.

Use this flow for all new blocks, copy changes, and design iterations:

1. Create a separate branch for the change.
2. Make edits only in `ui/` unless the task explicitly targets docs or deployment configuration.
3. Iterate locally on the same branch until the user says the current batch is ready for review. Use local dev/build checks during this phase.
4. Do not push or deploy every individual edit. Create/share a Vercel Preview Deployment only when the user explicitly asks for a preview, says the branch is ready to show, or requests review.
5. Apply review feedback on the same branch. If another preview is needed, update the same review branch/preview instead of starting a new flow.
6. After explicit approval, merge the approved branch into `main` or promote the approved preview deployment to production.

Do not push unfinished website changes directly to `main`.

## Deployment terms

- **Local development**: work happening only on the computer/workspace. Use this for unfinished edits and quick iteration.
- **Branch**: a separate line of work in Git, used to collect a full batch of related edits before review.
- **Preview deployment**: a temporary Vercel build from a branch, used only when the branch is ready for review.
- **Staging/review**: the review phase where the preview link is checked and feedback is collected. In this project, Vercel Preview is the staging/review environment.
- **Production**: the live public site. Update it only after the preview/reviewed version is approved.
- **Merge**: bringing the approved branch back into `main`.

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
