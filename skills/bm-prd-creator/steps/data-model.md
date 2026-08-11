# Data model

Now that features and integrations are locked, propose the data model. For a non-technical user, frame this as: "Here are the things your app needs to remember, and how they relate to each other."

For each entity (data model):

1. Name it (e.g., Bookmark, Tag, Project, Task)
2. List its fields in plain language ("URL — the link being saved", "title — the headline of the page")
3. Note any relationships ("each Bookmark belongs to a User; each Bookmark can have multiple Tags")

Propose the full model at once, then ask the user to confirm or adjust. Common adjustments: missing fields, missing entities, fields that should be required vs. optional. Use AskUserQuestion for the confirmation step:
- Looks right, lock it in
- Mostly right, I'll edit in chat
- Missing something — let me describe
