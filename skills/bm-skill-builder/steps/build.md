# Build it

Write the skill's files per the confirmed design. Work through `reference/conventions.md` as you go — every convention either appears in the built skill or has a reason not to.

The build checklist:

- **Frontmatter:** the confirmed `name` (kebab-case, verb-oriented) and the signed-off `description` — what it does AND when to use it, with trigger phrases from the confirmed example invocations; discovery depends on this line. ALL when-to-use information goes here — never write a "when to use this skill" section in the body, which only loads after the skill has already triggered.
- **Required inputs, declared — if the design has them:** what a run needs, and the instruction to ask for anything missing before doing other work. A skill designed with no inputs simply omits this.
- **The skill's own interview — if the design has one:** the confirmed per-run questions, written into the skill in recommend-then-confirm format. A skill designed with no per-run questions simply omits this.
- **Templated artifact:** the output format captured in a template file — mined from the user's real past examples when they exist, never invented when they do.
- **The self-check:** the confirmed definition of done, as a final step the skill runs on its own output before declaring a run complete.
- **Scope boundary:** the confirmed "this skill does not..." line, stated in SKILL.md.
- **Confirmed examples, built in:** any examples the user confirmed, placed where they do the most good — a real past output mined into the template, an input→output pair in a step or reference file.
- **Structure only as designed:** steps/shared/scripts/reference exactly as decided — no speculative folders.
- **Progressive disclosure, wired:** every unpacked file is linked from SKILL.md (or its phase file) with a note on when to read it; reference files stay one level deep; any reference file over ~100 lines opens with a table of contents.
- **Only what a run needs:** no README, CHANGELOG, installation guide, or notes about how the skill was made — the folder contains only files the executing agent uses.
- **Imperative voice:** write all skill prose in imperative/infinitive form — "Extract the text", not "You should extract the text."
- **Order in the orchestrator only:** if the skill has a `steps/` folder, SKILL.md (or the phase file) carries the numbered list and points at each step file. Step files get topic names with no number prefix (`interview.md`, not `02-interview.md`), a topic-only heading (`# Interview the user`, not `# Step 2 — ...`), and no language about being step N, what came before, or what comes next. Cross-reference other steps by name when you must, never by position.

Write every file completely — a skill with stub files is worse than a simpler skill that's whole.
