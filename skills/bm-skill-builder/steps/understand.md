# Understand the process

Open by asking the user for the one thing only they can provide: **a plain-language description of the process or function this skill will be responsible for.** High level is fine — "every time I get a sales call booked, I research the company and write a prep brief" is plenty. If their opening request already contained this, reflect it back in one sentence rather than asking again.

That description is the seed for everything downstream: the skill's name, its frontmatter description, what inputs (if any) a run needs, and what questions (if any) the skill should ask its user per run.

With the description in hand, work out what you can before asking anything else:

- **The job:** state it as "every time X happens, produce Y."
- **The trigger:** what would the user actually say when they want this skill? Draft 2–3 example invocations in their voice ("make a landing page for the spring launch"). These seed the description's trigger phrases and become test inputs at verification.
- **The inputs:** what would a run need to start? Which inputs would arrive at invocation (a file, a folder, a name) and which would have to be asked for? Note that some skills genuinely need none.
- **The artifact:** what does a run produce, and where does it land?
- **The raw material:** does the repo already contain examples of the process done by hand (past outputs, existing docs)? These are gold — a template mined from real past work beats one invented from description. List what you found.

If restructuring an existing skill instead of creating one: read the current skill in full, list what it does, and note where it strains (an overlong SKILL.md, duplicated instructions, hardcoded things that should be inputs).

Everything you infer here becomes a recommendation to put in front of the user — not a decision made for them.
