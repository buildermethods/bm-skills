# Format choice

Before diving into the rest of the interview, lock the **output format** for the PRD. This decides what file(s) get written at the end. Milestone prompt files always stay as markdown regardless of this choice — they're consumed by the coding agent in plan mode, not by you.

Briefly explain the options in one short framing message, then use AskUserQuestion:

- **HTML (recommended)** — A single self-contained `prd.html` file you can open in a browser. Visual, scannable, mobile-responsive, with a light/dark toggle. Cards, tables, icons, formatted lists. Best for understanding the plan at a glance and sharing with non-technical collaborators.
- **Markdown** — A traditional `prd.md` text file. Best if you want to read in your editor, edit by hand, or paste sections elsewhere.
- **Both** — Generate both `prd.html` and `prd.md`.

Lock the choice and remember it. You'll reference it again in the "Write files" phase. Then move on to **Core purpose**.
