A cloudflare-first backend for end-to-end speed, reliability, and developer velocity

- use AI to write code
- if AI fails to write properly, update instructions until AI writes properly
- (almost) always use AI to write code
- 100% test coverage required
- to help AI write better code, instruct it by templates, templates, templates

> ___ DO WRITE ABOVE 👆 ___

> ___ DO NOT WRITE BELOW 👇 (generated from ./list-rules-ai.md) ___

# (generated)

technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed


technology_stack:
  postgresql:
    description: Main database
    hosting: docker on fly.io
  zero_sync:
    description: Sync engine between Postgres, Cloudflare Durable Objects and browsers
    documentation: https://zero.rocicorp.dev/docs/zero-schema
  cloudflare_services:
    workers:
      description: ~microservices
    workers_ai:
      features:
        - function calling
    ai_gateway: maybe?
    vectorize:
      description: embeddings
    r2:
      description: unstructured data storage
    images:
      features:
        - resize
        - optimize
        - transform images from R2
    queues:
      description: async tasks/workflows
    hyperdrive:
      description: postgres connection pool
  typescript: {}
  effect:
    description: All custom code and business logic
    features:
      - error handling
      - piping/workflows
      - tracing/logging
  bun:
    description: Package manager and testing framework

features_and_capabilities:
  description: A cloudflare-first backend for end-to-end speed, reliability, and developer velocity
  core_features:
    - distributed realtime from PostgreSQL to backend workflows to frontends
    - AI everything
    - automate everything
    - test everything

code_quality_guidelines:
  code_reuse:
    - rely on existing code
    - only write new code when absolutely necessary
  testing_and_reliability:
    - write testable code
    - reliability and error-free code is paramount
    - efficiency and performance are secondary to reliability
  clarity_and_comprehension:
    - write code that is clear for both AI and humans
    - maintain 100% type safety
    - fix type errors until there are none
    - type casting only allowed in justified edge cases
  dependencies:
    - stick to package.json dependencies
    - only deviate when there's significant benefit
  communication:
    - ask for clarification before proceeding with unclear tasks

code_style_rules:
  naming_conventions:
    variables: snake_case
    properties: snake_case
    functions: snake_case
    files: kebab-case
    custom_types:
      format: PascalCase
      prefix: T
      example: TImage
    external_dependencies: default casing
  comments:
    ai_generated: prefix with (ai)

directory_specific_rules:
  src/**:
    - use Bun as test runner
    - write 100% Cloudflare Workers compatible code
    - no Bun-specific code, only Node.js code compatible with Cloudflare Workers
  script/**:
    - use Bun exclusively for tests
    - write 100% Bun code/imports/APIs/files
    - strictly no Node.js code, APIs, or imports

core_principles:
  - begin with foundational observations
  - keep exploring until a solution emerges naturally from the evidence
  - continue reasoning indefinitely when uncertain
  - question every assumption and inference
  - acknowledge and explore dead ends
  - frequently revise and backtrack as needed




# Project Rules and Guidelines

## Technology Stack

- **PostgreSQL**: Main database (docker on fly.io)
- [**Zero Sync**](https://zero.rocicorp.dev/docs/zero-schema): Sync engine between Postgres, Cloudflare Durable Objects and browsers
- **Cloudflare Services**:
  - Workers (as ~microservices)
  - Workers AI (+ function calling)
  - AI Gateway (maybe?)
  - Vectorize (embeddings)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Queues (for async tasks/workflows)
  - Hyperdrive (postgres connection pool)
- **TypeScript**
- **Effect**: All custom code and business logic
  - Error handling
  - Piping/workflows
  - Tracing/logging
- **Bun**: Package manager and testing framework

## Features and Capabilities

A cloudflare-first backend for end-to-end speed, reliability, and developer velocity

- Distributed realtime from PostgreSQL to backend workflows to frontends
- AI everything
- automate everything
- test everything

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Reliability and error-free code is paramount
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Fix type errors until there are none
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated code with `(ai)` comments

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed




# Project Rules and Guidelines

## Technology Stack

- **PostgreSQL**: Main database (docker on fly.io)
- [**Zero Sync**](https://zero.rocicorp.dev/docs/zero-schema): Sync engine between Postgres, Cloudflare Durable Objects and browsers
- **Cloudflare Services**:
  - Workers (as ~microservices)
  - Workers AI (+ function calling)
  - AI Gateway (maybe?)
  - Vectorize (embeddings)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Queues (for async tasks/workflows)
  - Hyperdrive (postgres connection pool)
- **TypeScript**
- **Effect**: All custom code and business logic
  - Error handling
  - Piping/workflows
  - Tracing/logging
- **Bun**: Package manager and testing framework

## Features and Capabilities

A cloudflare-first backend for end-to-end speed, reliability, and developer velocity

- Distributed realtime from PostgreSQL to services to frontends
- Custom embeddings for RAG retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Reliability and error-free code is paramount
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Fix type errors until there are none
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated code with `(ai)` comments

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed




# Project Rules and Guidelines

## Technology Stack

- **PostgreSQL**: Main database (docker on fly.io)
- [**Zero Sync**](https://zero.rocicorp.dev/docs/zero-schema): Sync engine between Postgres, Cloudflare Durable Objects and browsers
- **Cloudflare Services**:
  - Workers (as ~microservices)
  - AI
  - Vectorize (embeddings)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Queues (for async tasks/workflows)
  - Hyperdrive (postgres connection pool)
- **TypeScript**
- **Effect**: All custom code and business logic
  - Error handling
  - Piping/workflows
  - Tracing/logging
- **Bun**: Package manager and testing framework

## Features and Capabilities

A cloudflare-first backend for end-to-end speed, reliability, and developer velocity

- Distributed realtime from PostgreSQL to services to browsers
- Custom embeddings for RAG retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Reliability and error-free code is paramount
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Fix type errors until there are none
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated code with `(ai)` comments

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed




# Project Rules and Guidelines

## Technology Stack

- **TypeScript**
- **Bun**: Package manager and testing framework
- **Effect**: All custom code and business logic
  - Error handling
  - Piping
  - Tracing
  - Logging
- **Cloudflare Services**:
  - Workers (distributed microservices)
  - AI
  - Vectorize (embeddings)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Queues (for async tasks/workflows)
- **PostgreSQL**: Database with Cloudflare Hyperdrive connection pool
- **Zero Sync**: Sync engine from Postgres to Durable Objects and browsers
  - Documentation: [Zero Schema](https://zero.rocicorp.dev/docs/zero-schema)

## Features and Capabilities

Building an interactive, advanced, secure, reliable, and high-quality backend with:

- Distributed realtime from PostgreSQL
- Custom embeddings for prompt retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Prioritize reliability and error-free code
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated comments with `(ai)`

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed


# Project Rules and Guidelines

## Technology Stack

- **TypeScript** yooo
- **Bun**: Package manager and testing framework
- **Effect**: All custom code and business logic
  - Error handling
  - Piping
  - Tracing
  - Logging
- **Cloudflare Services**:
  - Workers (distributed microservices)
  - AI (using llama-3.3-70b-instruct-fp8-fast)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Vectorize (embeddings)
  - Queues (for async tasks/workflows)
- **PostgreSQL**: Database with Cloudflare Hyperdrive connection pool
- **Zero Sync**: Sync engine from Postgres to Durable Objects and browsers
  - Documentation: [Zero Schema](https://zero.rocicorp.dev/docs/zero-schema)

## Features and Capabilities

Building an interactive, advanced, secure, reliable, and high-quality backend with:

- Distributed realtime from PostgreSQL
- Custom embeddings for prompt retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Prioritize reliability and error-free code
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated comments with `(ai)`

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed


# Project Rules and Guidelines

## Technology Stack

- **TypeScript**
- **Bun**: Package manager and testing framework
- **Effect**: All custom code and business logic
  - Error handling
  - Piping
  - Tracing
  - Logging
- **Cloudflare Services**:
  - Workers (distributed microservices)
  - AI (using llama-3.3-70b-instruct-fp8-fast)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Vectorize (embeddings)
  - Queues (for async tasks/workflows)
- **PostgreSQL**: Database with Cloudflare Hyperdrive connection pool
- **Zero Sync**: Sync engine from Postgres to Durable Objects and browsers
  - Documentation: [Zero Schema](https://zero.rocicorp.dev/docs/zero-schema)

## Features and Capabilities

Building an interactive, advanced, secure, reliable, and high-quality backend with:

- Distributed realtime from PostgreSQL
- Custom embeddings for prompt retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Prioritize reliability and error-free code
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated comments with `(ai)`

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed


# Project Rules and Guidelines

## Technology Stack

- **TypeScript**
- **Bun**: Package manager and testing framework
- **Effect**: All custom code and business logic
  - Error handling
  - Piping
  - Tracing
  - Logging
- **Cloudflare Services**:
  - Workers (distributed microservices)
  - AI (using llama-3.3-70b-instruct-fp8-fast)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Vectorize (embeddings)
  - Queues (for async tasks/workflows)
- **PostgreSQL**: Database with Cloudflare Hyperdrive connection pool
- **Zero Sync**: Sync engine from Postgres to Durable Objects and browsers
  - Documentation: [Zero Schema](https://zero.rocicorp.dev/docs/zero-schema)

## Features and Capabilities

Building an interactive, advanced, secure, reliable, and high-quality backend with:

- Distributed realtime from PostgreSQL
- Custom embeddings for prompt retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Prioritize reliability and error-free code
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated comments with `(ai)`

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed


# Project Rules and Guidelines

## Technology Stack

- **TypeScript**
- **Bun**: Package manager and testing framework
- **Effect**: All custom code and business logic
  - Error handling
  - Piping
  - Tracing
  - Logging
- **Cloudflare Services**:
  - Workers (distributed microservices)
  - AI (using llama-3.3-70b-instruct-fp8-fast)
  - R2 (unstructured data storage)
  - Images (resize, optimize and transform images from R2)
  - Vectorize (embeddings)
  - Queues (for async tasks/workflows)
- **PostgreSQL**: Database with Cloudflare Hyperdrive connection pool
- **Zero Sync**: Sync engine from Postgres to Durable Objects and browsers
  - Documentation: [Zero Schema](https://zero.rocicorp.dev/docs/zero-schema)

## Features and Capabilities

Building an interactive, advanced, secure, reliable, and high-quality backend with:

- Distributed realtime from PostgreSQL
- Custom embeddings for prompt retrieval augmented generation
- Image/video/binary/data upload to R2 storage
  - Support for both unstructured and structured data
  - Image resizing/optimization/transformation via Cloudflare Images

## Code Quality Guidelines

1. **Code Reuse**
   - Rely on existing code
   - Only write new code when absolutely necessary

2. **Testing and Reliability**
   - Write testable code
   - Prioritize reliability and error-free code
   - Efficiency and performance are secondary to reliability

3. **Clarity and Comprehension**
   - Write code that is clear for both AI and humans
   - Maintain 100% type safety
   - Type casting only allowed in justified edge cases

4. **Dependencies**
   - Stick to `package.json` dependencies
   - Only deviate when there's significant benefit

5. **Communication**
   - Ask for clarification before proceeding with unclear tasks

## Code Style Rules

1. **Naming Conventions**
   - Variables, properties, functions: `snake_case`
   - Files: `kebab-case`
   - Custom types: `PascalCase` with 'T' prefix (e.g., `TImage`)
   - External dependencies: Use their default casing

2. **Comments**
   - Prefix all AI-generated comments with `(ai)`

## Directory-Specific Rules

### `./src/**` Directory
- Use Bun as test runner
- Write 100% Cloudflare Workers compatible code
- No Bun-specific code, only Node.js code compatible with Cloudflare Workers

### `./script/**` Directory
- Use Bun exclusively for tests
- Write 100% Bun code/imports/APIs/files
- Strictly no Node.js code, APIs, or imports

## Core Principles

1. Begin with foundational observations
2. Keep exploring until a solution emerges naturally from the evidence
3. Continue reasoning indefinitely when uncertain
4. Question every assumption and inference
5. Acknowledge and explore dead ends
6. Frequently revise and backtrack as needed
