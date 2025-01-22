technology_stack:
  postgresql_description: "Main database"
  postgresql_hosting: "docker on fly.io"
  zero_sync_description: "Sync engine between Postgres, Cloudflare Durable Objects and browsers"
  zero_sync_documentation: "https://zero.rocicorp.dev/docs/zero-schema"
  cloudflare_services_workers_description: "~microservices"
  cloudflare_services_workers_ai_features:
    - "function calling"
  cloudflare_services_ai_gateway: "maybe?"
  cloudflare_services_vectorize_description: "embeddings"
  cloudflare_services_r2_description: "unstructured data storage"
  cloudflare_services_images_features:
    - "resize"
    - "optimize"
    - "transform images from R2"
  cloudflare_services_queues_description: "async tasks/workflows"
  cloudflare_services_hyperdrive_description: "postgres connection pool"
  typescript: {}
  effect_description: "All custom code and business logic"
  effect_features:
    - "error handling"
    - "piping/workflows"
    - "tracing/logging"
  bun_description: "Package manager and testing framework"

features_and_capabilities:
  description: "A cloudflare-first backend for end-to-end speed, reliability, and developer velocity"
  core_features:
    - "distributed realtime from PostgreSQL to backend workflows to frontends"
    - "AI everything"
    - "automate everything"
    - "test everything"

code_quality_guidelines:
  code_reuse:
    - "rely on existing code"
    - "only write new code when absolutely necessary"
  testing_and_reliability:
    - "write testable code"
    - "reliability and error-free code is paramount"
    - "efficiency and performance are secondary to reliability"
  clarity_and_comprehension:
    - "write code that is clear for both AI and humans"
    - "maintain 100% type safety"
    - "fix type errors until there are none"
    - "type casting only allowed in justified edge cases"
  dependencies:
    - "stick to package.json dependencies"
    - "only deviate when there's significant benefit"
  communication:
    - "ask for clarification before proceeding with unclear tasks"

code_style_rules:
  naming_conventions_variables: "snake_case"
  naming_conventions_properties: "snake_case"
  naming_conventions_functions: "snake_case"
  naming_conventions_files: "kebab-case"
  naming_conventions_custom_types_format: "PascalCase"
  naming_conventions_custom_types_prefix: "T"
  naming_conventions_custom_types_example: "TImage"
  naming_conventions_external_dependencies: "default casing"
  comments_ai_generated: "(ai)"

directory_specific_rules:
  src_glob:
    - "use Bun as test runner"
    - "write 100% Cloudflare Workers compatible code"
    - "no Bun-specific code, only Node.js code compatible with Cloudflare Workers"
  script_glob:
    - "use Bun exclusively for tests"
    - "write 100% Bun code/imports/APIs/files"
    - "strictly no Node.js code, APIs, or imports"

core_principles:
  - "begin with foundational observations"
  - "keep exploring until a solution emerges naturally from the evidence"
  - "continue reasoning indefinitely when uncertain"
  - "question every assumption and inference"
  - "acknowledge and explore dead ends"
  - "frequently revise and backtrack as needed"