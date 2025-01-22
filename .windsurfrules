- core principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - if uncertain, continue reasoning indefinitely
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack if you need to

- tech in use:
  - typescript
  - bun (package manager, testing framework)
  - effect (for all custom code and business logic; error handling, piping, tracing, logging, etc.)
  - cloudflare workers (distributed microservices)
  - cloudflare ai (using llama-3.3-70b-instruct-fp8-fast)
  - cloudflare r2 (unstructured data storage)
  - cloudflare images (resize, optimize and transform images from r2)
  - cloudflare vectorize (embeddings)
  - cloudflare queues (for async tasks/workflows)
  - postgres (database, connection pool with cloudflare hyperdrive)
  - zero sync (sync engine from postgres to durable objects (for workers) and browsers) (https://zero.rocicorp.dev/docs/zero-schema)

- you're building a interactive, advanced, secure, reliable, and high quality backend with the following features/abilities/capabilities:
  - distributed realtime from postgres
  - custom embeddings for prompt retrieval augmented generation
  - image/video/binary/data (unstructured and structured) upload to r2 storage
  - resize/optimize/transform images from r2 using cloudflare images

- code quality rules:
  - rely on existing code, do not write new code unless absolutely necessary
  - write testable code
  - write code that is super clear to comprehend for AI and humans
  - reliable/error-free code is paramount, simplicity secondarily important
  - efficiency/performance/simplicity is important, simplicity secondarily important
  - stick to package.json dependencies unless significant benefit to opt for something else
  - if you need clarification on any part of the task, ask for more information before proceeding
  - every data type should be 100% typesafe (never type cast unless for special edge cases where it makes sense)

- code style rules:
  - use snake_case for all variables, property keys, and function names
  - use kebab-case for all file names
  - use PascalCase for all custom type definitions
  - all custom types should have a leading "T" to differ from global types, so a type Image becomes TImage
  - use the default casing from any external dependency

- code comments rules:
  - prefix all comments you write with (ai)

- rules for all files in the ./src/** directory:
  - use bun as a test runner
  - write 100% cloudflare workers compatible code (no bun, only node that's compatible with cloudflare workers)

- rules for all files in the ./script/** directory:
  - use 100% bun for tests (0% node for tests)
  - write 100% bun code/imports/apis/files
  - never use ANY Node code, Node apis, node imports, etc. 0% node!
