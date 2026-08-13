# Interview the user

Walk the user through the design of their skill, one item at a time. Every item uses **recommend-then-confirm** format: lead with your recommended answer and one line of reasoning, then 2–3 alternates, so the user can confirm in a word, pick an alternate, or describe their own view. The user should barely have to think unless they want to steer hard.

Work through these six items, in this order:

1. **Draft the description.** Write the frontmatter `description` — what the skill does AND when to use it, with trigger phrases — and get the user's sign-off. Draw the trigger phrases from the drafted example invocations (what the user would actually say to invoke it), and confirm those invocations sound right while confirming the description. Remember: ALL when-to-use information belongs in this description — never in the skill's body, which only loads after triggering. This is also where the scope boundary surfaces: ask if there's anything the skill should explicitly NOT do, and fold the confirmed boundary in.

2. **Recommend a name.** One recommendation plus a few alternates. Names are kebab-case and typically verb-oriented — the skill is named for what it does: `landing-page-creator`, `proposal-writer`, `changelog-publisher`, `sales-call-prep`, `blog-post-drafter`. Derive candidates from the confirmed description.

3. **Required inputs — if any.** Determine from the description whether a run needs declared inputs (a file, a URL, a name) or none at all; both are common. Recommend your call — "this skill needs a target file path at invocation" or "this one needs no inputs; it works from the repo" — and get confirmation or corrections. Whatever you recommend, always present **"none / not applicable"** as one of the options (it often won't be the recommended one) so the user can see that skipping inputs entirely is a legitimate choice.

4. **The skill's own interview — if any.** Which questions, if any, should the skill ask ITS user each run? Sometimes none, sometimes just 1–2, sometimes more — recommend based on which decisions genuinely vary run to run and can't be encoded. Here too, always present **"none / not applicable"** as one of the options, even when you're recommending specific questions. Any confirmed questions get built into the new skill in the same recommend-then-confirm format.

5. **Realistic examples — if applicable.** Recommend one or two realistic examples to build into the skill: a real past output to mine as a template, a sample input→output pair, or an example invocation with its expected result. Real examples align a skill's output far better than descriptions alone. Recommend from raw material already found in the repo when it exists; otherwise ask the user to supply or approve one. As with inputs and interview questions, always present **"none / not applicable"** as one of the options — some skills genuinely don't benefit from a baked-in example.

6. **Draft the process steps.** Lay out the ordered steps of the skill's process — each with a one-line description — and show the user the full sequence for confirmation or correction. Include here what a run produces (the artifact and where it lands) and how the skill will know a run came out right; that definition of done becomes the skill's self-check.

Don't move on until the user has confirmed each item.
