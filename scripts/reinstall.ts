#!/usr/bin/env bun
import trash from 'trash'
const files_to_delete = [
	'./.wrangler',
	'./node_modules',
	'./.DS_Store',
	'./bun.lock',
	'./package-lock.json',
	'./pnpm-lock.yaml',
]
await trash(files_to_delete)
console.log(`\n✔️ deleted ${files_to_delete.length} files\n`)
