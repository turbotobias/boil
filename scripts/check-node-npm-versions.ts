/* eslint-disable no-console */
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import semver from 'semver'

type TPackageJson = {
	engines?: {
		node?: string
		pnpm?: string
	}
}

// checks that current node and pnpm versions satisfies requirements in package.json

const VERBOSE_FORCED = false
const args = process.argv.slice(2)
const VERBOSE = VERBOSE_FORCED || (args.length > 0 && args[0] === 'verbose')

const print_err_and_exit = (message: string): never => {
	console.error(message)
	console.error('Aborting')
	process.exit(1)
}

const check_pnpm_version = (pnpm_version_required: string | undefined): void => {
	if (!pnpm_version_required) {
		console.log('No required pnpm version specified')
		return
	}

	const pnpm_version = spawnSync('pnpm', ['-v']).stdout.toString().trim()

	if (VERBOSE) {
		console.log(`pnpm required: '${pnpm_version_required}' - current: '${pnpm_version}'`)
	}

	if (!semver.satisfies(pnpm_version, pnpm_version_required)) {
		print_err_and_exit(
			`Required pnpm version '${pnpm_version_required}' not satisfied. Current: '${pnpm_version}'.`
		)
	}
}

const check_node_version = (node_version_required: string | undefined): void => {
	if (!node_version_required) {
		console.log('No required node version specified')
		return
	}

	const node_version = process.version

	// Add debug info

	if (VERBOSE) {
		console.log('\nDebug info:')
		console.log(`- node required: ${node_version_required}`)
		console.log(`- node version current: ${node_version}`)
		console.log(`- process.version: ${process.version}`)
		console.log(`- process.execPath: ${process.execPath}`)
		console.log(`- script path: ${fileURLToPath(import.meta.url)}\n`)
	}

	if (!semver.satisfies(node_version, node_version_required)) {
		print_err_and_exit(
			`Required node version '${node_version_required}' not satisfied. Current: '${node_version}'.`
		)
	}
}

const json = JSON.parse(readFileSync('./package.json', 'utf-8')) as TPackageJson

if (!json.engines) {
	print_err_and_exit('no engines entry in package json?')
}

check_node_version(json.engines?.node)
check_pnpm_version(json.engines?.pnpm)
