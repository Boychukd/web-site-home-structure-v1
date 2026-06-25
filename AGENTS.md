## Imported Claude Cowork project instructions

## Project working rules

- Treat `ui/` as the only active website implementation.
- Do not edit `v1.0`, `v1.1`, `v1.2`, `v1.3`, `v1.4`, or `v1.1-ui` unless the user explicitly asks to work on archived wireframes.
- Use the archived wireframes only as historical reference. Do not update copy, layout, or content there during normal site work.
- For website changes, work on a separate branch first and keep iterating locally on that branch until the user says the batch of edits is ready for review.
- Do not push/deploy every individual edit. Share a Vercel Preview link only when the user explicitly asks to review the current branch, says the work is ready to show, or requests a preview deployment.
- Production should be updated only after explicit approval, by merging/promoting the approved reviewed version.
- Keep production-oriented changes scoped to `ui/` unless deployment/docs configuration is the explicit target.
