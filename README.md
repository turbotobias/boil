# Boil 👨‍🍳

> starting point for new projects

### Apps and Packages

- `apps/backend`: hono on cloudflare
-  [logs](https://fly-metrics.net/d/fly-logs/fly-logs?from=now-1h&to=now&var-source=prometheus_on_fly&var-app=v1-zero-cache-canary&var-region=All&var-host=All&orgId=37268&refresh=auto) `apps/sync-server`: syncs pg to browsers
- `apps/sync-web-demo`: demo of sync server
- `packages/*`: shared config, utilities, schemas, etc.

### How it works

It doesn't

---
> 👆 write above

> 👇 below is generated from `./list-rules-ai.yaml`

## generated

features and capabilities:
  - Cloudflare, Postgres, AI, realtime

tech:
  - postgresql (main database)
  - zero sync (sync engine between Postgres and browsers; docs: https://zero.rocicorp.dev/docs/zero-schema )
  - cloudflare workerd (sort of micoservices)
  - cloudflare workers_ai (function calling)
  - cloudflare ai_gateway (maybe?)
  - cloudflare vectorize (embeddings)
  - bunny for storage
  - cloudflare images (resize, optimize, transform images from R2)
  - cloudflare queues (async tasks/workflows)
  - cloudflare hyperdrive (Postgres connection pool)
  - typescript
  - effect (All custom code/business logic: error handling, piping/workflows, tracing/logging)

code quality guidelines:
  - Rely on existing code
  - Only write new code when absolutely necessary
  - Write testable code
  - Reliability and error-free code is paramount
  - Efficiency and performance are secondary to reliability
  - Write code that is clear for both AI and humans
  - Maintain 100% type safety
  - Fix type errors until there are none
  - Type casting only allowed in justified edge cases
  - Stick to package.json dependencies
  - Only deviate from dependencies when there's significant benefit
  - Ask for clarification before proceeding with unclear tasks
  - Don't suggest code that causes typescript errors
  - Fix any typescript errors before proceeding

code style rules:
  - Naming conventions: variables => snake_case, properties => snake_case, functions => snake_case, files => kebab-case
  - Custom types => PascalCase prefixed with "T" (e.g. TImage)
  - External dependencies => default casing
  - Comments: ai_generated => prefix with (ai)

directory specific rules for ./src/**:
  - write 100% Cloudflare Workers compatible code (semi node compatible), no Bun-specific code

directory specific rules for ./scripts/**:
  - use Bun exclusively for tests, write 100% Bun code, strictly no Node.js code

shell script rules:
  - use "trash" to delete files and directories (never use "rm -rf")
  - use "bunx" to run scripts (never use "npx", "pnpx")
  - use "bun" or "bun run" to run scripts (never use "node")

core principles:
  - Begin with foundational observations
  - Keep exploring until a solution emerges naturally from the evidence
  - Continue reasoning indefinitely when uncertain
  - Question every assumption and inference
  - Acknowledge and explore dead ends
  - Frequently revise and backtrack as needed
## (generated)


features and capabilities:
  - Cloudflare, Postgres, AI, realtime

tech:
  - postgresql (main database)
  - zero sync (sync engine between Postgres and browsers; docs: https://zero.rocicorp.dev/docs/zero-schema )
  - cloudflare workerd (sort of micoservices)
  - cloudflare workers_ai (function calling)
  - cloudflare ai_gateway (maybe?)
  - cloudflare vectorize (embeddings)
  - bunny for storage
  - cloudflare images (resize, optimize, transform images from R2)
  - cloudflare queues (async tasks/workflows)
  - cloudflare hyperdrive (Postgres connection pool)
  - typescript
  - effect (All custom code/business logic: error handling, piping/workflows, tracing/logging)

code quality guidelines:
  - Rely on existing code
  - Only write new code when absolutely necessary
  - Write testable code
  - Reliability and error-free code is paramount
  - Efficiency and performance are secondary to reliability
  - Write code that is clear for both AI and humans
  - Maintain 100% type safety
  - Fix type errors until there are none
  - Type casting only allowed in justified edge cases
  - Stick to package.json dependencies
  - Only deviate from dependencies when there's significant benefit
  - Ask for clarification before proceeding with unclear tasks
  - Don't suggest code that causes typescript errors
  - Fix any typescript errors before proceeding

code style rules:
  - Naming conventions: variables => snake_case, properties => snake_case, functions => snake_case, files => kebab-case
  - Custom types => PascalCase prefixed with "T" (e.g. TImage)
  - External dependencies => default casing
  - Comments: ai_generated => prefix with (ai)

directory specific rules for ./src/**:
  - write 100% Cloudflare Workers compatible code (semi node compatible), no Bun-specific code

directory specific rules for ./scripts/**:
  - use Bun exclusively for tests, write 100% Bun code, strictly no Node.js code

shell script rules:
  - use "trash" to delete files and directories (never use "rm -rf")
  - use "bunx" to run scripts (never use "npx", "pnpx")
  - use "bun" or "bun run" to run scripts (never use "node")

core principles:
  - Begin with foundational observations
  - Keep exploring until a solution emerges naturally from the evidence
  - Continue reasoning indefinitely when uncertain
  - Question every assumption and inference
  - Acknowledge and explore dead ends
  - Frequently revise and backtrack as needed