# Write files

Once everything is locked, generate the files. **Just write them.** Don't show a draft for approval first — the user already approved each piece during the interview.

## What to write, based on the format choice

Recall the format the user picked in the **Format choice** phase:

- **HTML** → write `_build_plan/prd.html` only. Use the scaffold and section snippets in `steps/prd-html-template.md`.
- **Markdown** → write `_build_plan/prd.md` only. Use the markdown template below.
- **Both** → write **both** `_build_plan/prd.html` **and** `_build_plan/prd.md`. The two files must describe the same locked scope — HTML is a different presentation, not a different plan.

Milestone `prompt.md` files are **always written as markdown** regardless of the format choice. They're consumed by the coding agent in plan mode, not by the user.

Create this exact structure in the codebase root (file presence depends on the format choice above):

```
_build_plan/
  prd.html         # HTML or Both
  prd.md           # Markdown or Both
  milestones/
    1-{milestone-slug}/
      prompt.md
    2-{milestone-slug}/
      prompt.md
    ...
```

`{milestone-slug}` is a short kebab-case name derived from the milestone (e.g., `core-crud`, `integrations-layer`, `public-docs`).

After writing the `_build_plan/` files, also add a short note about the `_build_plan/` folder to the project's agent instructions file — see "Agent instructions note" below.

After writing, briefly tell the user the files are ready and how to use them. Tailor the message to what was written:

- If `prd.html` was written: tell them to open it in a browser (`open _build_plan/prd.html`) to review the plan visually, then open the milestone-1 `prompt.md` and ask the agent to start there.
- If only `prd.md` was written: tell them to open `_build_plan/prd.md` to review, then open the milestone-1 `prompt.md` and ask the agent to start there.
- Either way, mention that after each milestone the agent will write a `milestone-log.md` in that milestone's folder to record what was done.

## File templates

### prd.html structure

See `steps/prd-html-template.md` for the complete scaffold, per-section snippets, and icon hints. Read that file in full when generating `prd.html` and follow it closely.

### prd.md structure

Mirror the structure of a high-quality real PRD. Use these sections in order:

```markdown
# {App name}

> **About these build-plan files:** Everything in `_build_plan/` (this PRD and the per-milestone folders) is a **temporary documentation and guidance artifact** for the initial build-out of this codebase. These files are not functional — no code, configuration, runtime logic, tests, or deployment process should import, read, reference, or depend on anything in `_build_plan/`. Once the initial milestones are built and shipped, the entire `_build_plan/` folder is expected to be deleted from the codebase. Do not treat it as long-living documentation.

## What we're building

{1–3 sentence core purpose, expanded with a paragraph or two of context. End with a sentence on the tech stack and how the build is structured around milestones.}

---

### What the app does

{Bulleted list of the high-level user-facing capabilities, written from the user's perspective. 5–10 bullets.}

---

### Already provided by the {starter template name, or "existing codebase"}

{Bulleted list of what's already built and does not need to be re-specced.}

---

### Out of scope

{Top-level out-of-scope list with brief reasoning for each item. Each bullet is one line.}

---

### Data model

{For each entity, a heading and a bullet list of fields described in plain language — what the app needs to remember about this thing, not the database column types or constraints. Note relationships in prose between entities or at the end. Keep this conceptual, not technical: "url — the link being saved", not "url: string, not null, indexed."}

---

## Milestone 1 — {Name}

{1–2 sentence framing of what this milestone delivers.}

### What gets built

{Bulleted list of user-facing capabilities and screens delivered in this milestone. Describe what the user can do, see, or experience when this milestone is done — not the technical pieces (controllers, models, jobs) needed to deliver it. The agent will figure out the technical pieces in plan mode.}

### What milestone {N} explicitly does NOT include

{Bulleted list of things a coder might assume should be in this milestone but aren't.}

### Done when

{1–2 sentences describing the verification criteria — what the user should be able to do in the browser when this milestone is complete.}

---

{Repeat for each milestone}
```

### milestones/N-{slug}/prompt.md structure

Keep this lean. The prompt.md is a thin trigger file — it does NOT re-summarize what's in the PRD.

In the template below, substitute `{PRD_PATH}`:

- If the user picked **HTML** only → `_build_plan/prd.html`
- If the user picked **Markdown** only or **Both** → `_build_plan/prd.md` (markdown is easier for the agent to parse; if both formats exist, prefer the markdown one for the agent's context)

```markdown
# Milestone {N} — {Name}

You are entering plan mode to plan and then build milestone {N} of this project.

## Context

- Read `@{PRD_PATH}` for the full project context, scope, data model, and tech stack.
- Read previous milestone folders (`@_build_plan/milestones/1-*/milestone-log.md`, etc.) to understand what has already been built. If you are working on milestone 1, there is no prior milestone to read.

## Your task

1. Plan the implementation for **only** milestone {N} as defined in the PRD. Do not plan or build anything from later milestones.
2. After the user confirms the plan, build only what is in milestone {N}'s scope.
3. Verify your work against the "Done when" criteria for milestone {N} in the PRD.
4. When complete, write a `milestone-log.md` in this folder (`_build_plan/milestones/{N}-{slug}/milestone-log.md`). Structure it as follows:
   - **Start with a `## What's new in the app` section at the very top.** This is a concise, human-readable, bulleted list of the main user-facing features or functionality that were added in this milestone — written so a non-technical reviewer can see at a glance what new things to expect in the app now that this milestone is done. Frame each bullet as a capability the user will now see or be able to do, not as a technical artifact. Keep it short and scannable.
   - Then include the implementation detail sections below for the next milestone's agent to reference:
     - What was built (files created, models added, routes added, etc.)
     - Any decisions made during implementation that weren't pre-specified in the PRD
     - Anything the next milestone will need to know
     - Any deviations from the PRD and why

Ask me any clarifying questions using AskUserQuestion tool to lock in the implementation plan for this milestone.
```

## Agent instructions note

After writing the `_build_plan/` files, append a short note to the project's agent instructions file so future agent sessions understand the role of `_build_plan/`.

1. Check the codebase root for an existing `CLAUDE.md` or `AGENTS.md`. Use whichever exists.
2. If neither exists, create `AGENTS.md` at the codebase root.
3. Append the section below at the **bottom** of the file (after any existing content). If a `## _build_plan/` section already exists, update it in place rather than duplicating.

```markdown
## `_build_plan/`

The `_build_plan/` folder contains the initial PRD and per-milestone prompts used to scaffold this codebase during its initial build-out phase. These files are **temporary** — they exist for documentation and guidance only. They are **not** functional: no code, configuration, or runtime logic in this codebase should import, reference, or depend on anything inside `_build_plan/`.

Do not treat `_build_plan/` as long-living documentation for the codebase. The codebase will evolve past the assumptions and decisions captured here. Once the initial milestones are complete, this folder is expected to be deleted.
```

## Style notes for the PRD output

- Mirror the voice of a sharp product spec: concrete, specific, opinionated. Not "the app should probably support X" but "the app supports X."
- Per-feature scoping is specific about user-facing behavior: what the user sees on screen, what they can do, what they cannot do, what the output looks like. It is NOT specific about technical implementation (timeouts, libraries, error-handling patterns, parsing logic) — that's the agent's job in plan mode.
- The "Out of scope" lists are valuable — never skip them, never make them generic.
- Data model fields are described in plain language (what the app needs to remember), not as database column definitions.
- When referring to the starter template features, use the actual names if known (e.g., "Build New starter" rather than "the starter template").
- These style notes apply to both formats. The HTML version uses the same locked content as the markdown — it's a different presentation, not a different scope.
