import { describe, test, expect, beforeEach, afterEach } from 'bun:test'
import { mkdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'

// (ai) test setup variables
const test_dir = `${import.meta.dir}/__test_hidden_files__`
const vscode_dir = `${test_dir}/.vscode`

// (ai) helper to create test files
const create_test_files = async () => {
  // (ai) create directories
  await mkdir(test_dir, { recursive: true })
  await mkdir(vscode_dir, { recursive: true })
  // (ai) create mock settings.json
  const settings = {
    'search.exclude': { existing: true },
    'files.exclude': { existing: true },
    'files.watcherExclude': { existing: true },
  }
  await Bun.write(`${vscode_dir}/settings.json`, JSON.stringify(settings))

  // (ai) create mock .gitignore
  await Bun.write(`${test_dir}/.gitignore`, 'node_modules\n.env\n#comment\n\ntest/')

  // (ai) create mock .list-files-hidden
  await Bun.write(`${test_dir}/.list-files-hidden`, '.DS_Store\n.env.local')
}

// (ai) helper to cleanup test files
const cleanup_test_files = async () => {
  if (existsSync(test_dir)) {
    await rm(test_dir, { recursive: true, force: true })
  }
}

describe('generate-list-files-hidden', () => {
  beforeEach(async () => {
    await create_test_files()
  })

  afterEach(async () => {
    await cleanup_test_files()
  })

  test('should generate correct patterns from input files', async () => {
    // (ai) run the script with test directory
    process.env.TEST_ROOT_DIR = test_dir
    await import('./generate-list-files-hidden')

    // (ai) read generated settings
    const settings = JSON.parse(await Bun.file(`${vscode_dir}/settings.json`).text())

    // (ai) verify patterns are correctly generated
    const expected_patterns = {
      existing: true,
      node_modules: true,
      '**/node_modules': true,
      '**/node_modules/**': true,
      '.env': true,
      '**/.env': true,
      '**/.env/**': true,
      'test/': true,
      '**/test/': true,
      '**/test/**': true,
      '.DS_Store': true,
      '**/.DS_Store': true,
      '**/.DS_Store/**': true,
      '.env.local': true,
      '**/.env.local': true,
      '**/.env.local/**': true,
    }

    expect(settings['search.exclude']).toEqual(expected_patterns)
    expect(settings['files.exclude']).toEqual(expected_patterns)
    expect(settings['files.watcherExclude']).toEqual(expected_patterns)

    // (ai) verify warning comment is present
    expect(
      settings['__PLEASE_DO_NOT_CHANGE_GENERATED_SETTINGS_BELOW__CHANGE_SCRIPT_LIST_FILES_HIDDEN_INSTEAD__👇']
    ).toBe(true)
  })

  test('should handle empty input files', async () => {
    // (ai) create empty input files
    await Bun.write(`${test_dir}/.gitignore`, '')
    await Bun.write(`${test_dir}/.list-files-hidden`, '')

    // (ai) run the script
    process.env.TEST_ROOT_DIR = test_dir
    await import('./generate-list-files-hidden')

    // (ai) read generated settings
    const settings = JSON.parse(await Bun.file(`${vscode_dir}/settings.json`).text())

    // (ai) verify only existing patterns remain
    const expected_patterns = { existing: true }
    expect(settings['search.exclude']).toEqual(expected_patterns)
    expect(settings['files.exclude']).toEqual(expected_patterns)
    expect(settings['files.watcherExclude']).toEqual(expected_patterns)
  })
})
