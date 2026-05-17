# Per-feature scoping

Now revisit each in-scope feature one at a time and lock its detailed scope. For each feature, focus on **user-facing decisions only** — what the user sees, does, and experiences. Do NOT discuss technical implementation (libraries, methods, error handling, timeouts, parsing logic). Those are the agent's job to plan later.

For each feature:

1. Propose the specific user-facing sub-features and capabilities that ARE in scope: what does the user see on screen, what can they do, what UI elements exist, what happens after they take an action, what does the recipient/output look like.
2. Propose the specific user-facing sub-features and capabilities that are NOT in scope: things a more ambitious version of this feature would have but v1 won't (e.g., editing after sending, history, analytics, advanced filters, preview images, attachments, multi-recipient, etc.).
3. Ask the user to confirm or adjust.

Example of the right level of specificity (for a "share by email" feature):
- In scope: a "Share" button on each item; a small form with recipient email, pre-filled subject, pre-filled body the user can edit; one-shot send action; recipient sees a readable email with the item's details.
- Out of scope: tracking opens or clicks, share history, sharing to multiple recipients at once, attaching files, scheduled sends.

What does NOT belong here: which mailer library to use, what queue backend, retry behavior, timeout values, how the email template is rendered. The agent decides all of that in plan mode.

Move through features one at a time. Don't batch.
