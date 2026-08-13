# Save the skill

Ask the user where the finished skill should live — recommend-then-confirm, one recommendation plus the alternates:

- **Recommended for a skill used inside this repo: the repo's `.agents/skills/` folder.** `.agents/skills/` is the open Agent Skills convention — harness-agnostic, readable by any agent that supports the standard.
- **Recommended for a skill used across repos: global `~/.agents/skills/`.** Rule of thumb: if the user would ever invoke it from a second repo, go global now — nothing gets copy-pasted between skill folders later.
- **Alternates: `.claude/skills/` (this repo) or `~/.claude/skills/` (global).** Offer these for setups that read only Claude Code's folders — but recommend the `.agents` convention first, and mention that one symlink can make Claude Code read `.agents/skills/` too.

Recommend local vs global from how the skill will actually be used, then let the user confirm or redirect.

Once confirmed, write (or move) the skill folder to that location. Run the verification from the saved location, not from a draft folder — the skill should prove itself where it will actually live.
