#!/usr/bin/env bun
import trash from 'trash'
await trash(['./.wrangler', './node_modules', './.DS_Store', './bun.lock'])
await Bun.$`bun pm cache rm && bun install --force`
console.log('\n✔️ reinstalled\n')
