import { test,expect } from 'bun:test'
import updateSettings from './generate-ignorelist-for-vscode-explorer'

// (ai) Setup test environment
async function setupTestEnv(baseDir: string) {
  try {
    // (ai) Create test directory structure
    await Bun.write(`${baseDir}/.vscode/settings.json`,JSON.stringify({
      'search.exclude': { 'existing': true },
      'files.exclude': { 'existing': true },
      'files.watcherExclude': { 'existing': true }
    },null,2))

    // (ai) Create .gitignore with test patterns
    await Bun.write(`${baseDir}/.gitignore`,`
# (ai) Test comment
node_modules
.env
dist/
*.log`.trim())

    return true
  } catch (error) {
    console.error('(ai) Setup failed:',error)
    return false
  }
}

// (ai) Cleanup test environment
async function cleanupTestEnv(baseDir: string) {
  try {
    await Bun.spawn(['rm','-rf',baseDir])
    return true
  } catch (error) {
    console.error('(ai) Cleanup failed:',error)
    return false
  }
}

test('updateSettings updates VSCode settings with gitignore patterns',async () => {
  const testDir = `./test-temp`

  // (ai) Setup and verify
  expect(await setupTestEnv(testDir)).toBe(true)

  // (ai) Run the update
  await updateSettings(testDir)

  // (ai) Verify the results
  const updatedSettings = JSON.parse(
    await Bun.file(`${testDir}/.vscode/settings.json`).text()
  )

  const expectedPatterns = {
    'existing': true,
    'node_modules': true,
    '**/node_modules': true,
    '**/node_modules/**': true,
    '.env': true,
    '**/.env': true,
    '**/.env/**': true,
    'dist/': true,
    '**/dist/': true,
    '**/dist//**': true,
    '*.log': true,
    '**/*.log': true,
    '**/*.log/**': true
  }

  expect(updatedSettings['search.exclude']).toEqual(expectedPatterns)
  expect(updatedSettings['files.exclude']).toEqual(expectedPatterns)
  expect(updatedSettings['files.watcherExclude']).toEqual(expectedPatterns)

  // (ai) Cleanup
  expect(await cleanupTestEnv(testDir)).toBe(true)
})

test('updateSettings handles empty .gitignore',async () => {
  const testDir = `${process.cwd()}/test-temp-empty`

  // (ai) Setup and verify
  expect(await setupTestEnv(testDir)).toBe(true)

  // (ai) Override with empty .gitignore
  await Bun.write(`${testDir}/.gitignore`,'')

  // (ai) Run the update
  await updateSettings(testDir)

  // (ai) Verify the results
  const updatedSettings = JSON.parse(
    await Bun.file(`${testDir}/.vscode/settings.json`).text()
  )

  const expectedPatterns = { 'existing': true }
  expect(updatedSettings['search.exclude']).toEqual(expectedPatterns)
  expect(updatedSettings['files.exclude']).toEqual(expectedPatterns)
  expect(updatedSettings['files.watcherExclude']).toEqual(expectedPatterns)

  // (ai) Cleanup
  expect(await cleanupTestEnv(testDir)).toBe(true)
})
