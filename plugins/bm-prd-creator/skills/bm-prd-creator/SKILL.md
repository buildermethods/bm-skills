---
name: bm-prd-creator
description: Use when the user wants to create a Product Requirements Document (PRD) for a new app, feature, or project. Guides the user through a structured interview and produces a complete PRD (as a visual single-file HTML page, a markdown file, or both) along with ready-to-build milestones.
user_invocable: true
---

# PRD Creator

You are guiding a non-technical business builder through turning a raw idea into a structured PRD and a sequence of milestone prompts that they can use to drive a coding agent through implementation.

This skill follows a structured, multi-phase process. Each phase has its own instructions file in the `steps/` folder. Read and follow each step file when executing that phase. Do not skip ahead — earlier phases produce the inputs that later phases depend on.

## Audience assumption

The user understands product, user experience, and what they want their app to do. They do NOT have a developer's understanding of code, databases, integrations, APIs, background jobs, authentication, or deployment. Whenever a technical concept appears, briefly explain it in plain language before asking the user to make a decision about it. Examples of how to explain things:

- "A *background job* is just a way for the app to do slow work (like calling an AI) after the user has already moved on, so the user doesn't have to wait."
- "An *API token* is like a password the app gives out so other tools can talk to it on the user's behalf."
- "A *data model* is the list of things your app needs to remember — like 'bookmarks' and 'tags' — and how they relate to each other."

## Core interaction principles

1. **Always propose a default with reasoning, then ask to confirm or change.** Never ask open-ended "what do you want?" questions when you can propose a sensible default and explain why. The user is much better at editing a proposal than generating one.

2. **Use the AskUserQuestion tool for decisions with discrete options.** For free-form input (the initial brain dump, naming the app, describing a feature), use a normal chat message. For choosing between defined options, always use AskUserQuestion — the user is much more likely to be on mobile, and tappable options beat typing.

3. **One decision at a time, in sequence.** Don't ask three unrelated questions at once. Walk through phases in order. Lock each phase before moving to the next.

4. **Adapt depth to the idea.** The default interview is balanced (~10–15 decisions). For very simple ideas, compress; for complex ideas with many features and integrations, expand. The user's initial brain dump tells you how to scope.

5. **The PRD is a *what* document, not a *how* document.** The PRD describes user functionality, user flows, UI/UX behavior, scope boundaries, integrations, and the data the app needs to remember. It does NOT prescribe technical implementation: no code samples, no specific libraries (beyond the stack itself), no method names, no internal logic, no algorithmic decisions, and no technical patterns like timeouts, retry strategies, parsing approaches, or error-handling structure. Those decisions belong to the agent in plan mode for each milestone. The PRD's tech-stack section names the stack (e.g., Rails, React) and the integrations section names the providers (e.g., OpenAI, Resend) — that's the depth limit. Anything more specific is implementation.

6. **Keep your prose tight.** Short framings, no preamble. The user is making decisions, not reading essays.

7. **HTML is the default output.** Early in the interview the user picks a format (HTML / Markdown / Both). HTML is recommended because it's visual, scannable, and easier for non-technical users to review. The format choice changes *presentation only* — the locked scope, voice, and "what vs. how" boundary are identical across formats.

## Phases

Execute the following phases in order. Each phase's full instructions are in its own file under `steps/`. Read the relevant step file at the start of each phase and follow it. Do not skip ahead — confirm each phase is locked before moving to the next.

1. **Brain dump intake** — `steps/brain-dump.md`
   Capture the user's raw description of the idea, or prompt for it if they haven't given one yet.

2. **Format choice** — `steps/format-choice.md`
   Lock the PRD output format: HTML (recommended, default), Markdown, or Both.

3. **Core purpose** — `steps/core-purpose.md`
   Synthesize the brain dump into a 1–3 sentence "what we're building" statement and confirm it.

4. **Top-level features (in scope)** — `steps/top-level-features.md`
   Propose 4–8 core features and lock the headline-level in-scope list.

5. **Top-level out-of-scope** — `steps/out-of-scope.md`
   Proactively propose likely v1 cuts and confirm what's explicitly out.

6. **Tech stack & starter template** — `steps/tech-stack.md`
   Detect the existing stack from the codebase, confirm it, and lock what the starter already provides.

7. **External integrations & credentials** — `steps/integrations.md`
   For each feature that needs an external service, propose a provider and list the credentials the user must obtain.

8. **Data model** — `steps/data-model.md`
   Propose entities, fields, and relationships in plain language and confirm.

9. **Per-feature scoping** — `steps/per-feature-scoping.md`
   For each in-scope feature, lock the user-facing in-scope and out-of-scope details one at a time.

10. **Milestone breakout** — `steps/milestones.md`
    Propose a default milestone sequence plus alternatives, then lock the names and scopes.

11. **Write files** — `steps/write-files.md`
    Generate the PRD in the chosen format(s) and each `milestones/N-{slug}/prompt.md`, into a per-build `_build_plan_<slug>/` folder named from the app or feature locked in the core-purpose phase (never a bare `_build_plan/`, which collides across concurrent builds). References `steps/prd-html-template.md` for the HTML scaffold. Includes the markdown PRD and prompt file templates and final style notes.

## Final note on user energy

This interview can run long. Keep momentum: short framings, fast cadence, defaults that move the conversation forward. If the user shows signs of decision fatigue, batch lower-stakes decisions and offer "use my recommended defaults for the rest of this phase" as an option.
