#!/usr/bin/env bun
import trash from 'trash'
await trash(['./.wrangler', './node_modules', './.DS_Store', './bun.lockb'])
await Bun.$`bun install`
console.log('\n✔️ reinstalled\n')
