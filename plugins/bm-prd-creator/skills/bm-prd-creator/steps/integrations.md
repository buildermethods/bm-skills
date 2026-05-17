# External integrations & credentials

For each in-scope feature, identify whether it needs an external service. Examples:

- AI summarization → OpenAI or Anthropic API
- Email sending → Resend, Postmark, SendGrid
- Payments → Stripe (but probably out of scope for v1)
- File uploads → S3 or similar
- SMS → Twilio
- Maps → Google Maps or Mapbox

For each integration:

1. Explain what the integration does in plain language.
2. Propose a default provider with a one-line reason (cheapest / simplest / most common).
3. Use AskUserQuestion to confirm the provider or switch.
4. List the credentials the user will need to obtain (API keys, account signups) so they know what to sign up for before the agent reaches the milestone that uses the integration. Don't prescribe how the credentials are stored in the codebase — the agent decides that during implementation.

Lock the integration list before moving on. If a feature requires an integration the user doesn't want to set up, flag it now — that feature may need to move out of scope.
