

export default async function updateSettings(baseDir = '.') {
  const rootDir = baseDir || `${import.meta.dir}/..`;

  // (ai) Read the source file
  const settings = JSON.parse(await Bun.file(`${rootDir}/.vscode/settings.json`).text())
  const gitignore = await Bun.file(`${rootDir}/.gitignore`).text()
  const hiddenlist = await Bun.file(`${rootDir}/.list-files-hidden`).text()
  Bun.stdout.write(`(ai) Found ${hiddenlist.split('\n').length} hiddenlist patterns\n`)
  // (ai) Process gitignore lines
  const patterns = [hiddenlist,gitignore].flatMap((content) => content.split('\n'))
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((pattern) => ({
      [pattern]: true,
      [`**/${pattern}`]: true, // (ai) Handle nested patterns
      [`**/${pattern}/**`]: true, // (ai) Handle directory patterns
    }))
    .reduce((acc,curr) => Object.assign(acc,curr),{})

  console.log(patterns)

  // (ai) Update VSCode settings
  settings['search.exclude'] = Object.assign({},settings['search.exclude'],patterns)
  settings['files.exclude'] = Object.assign({},settings['files.exclude'],patterns)
  settings['files.watcherExclude'] = { ...settings['files.watcherExclude'],...patterns }

  // (ai) Write updated settings
  await Bun.write(`${rootDir}/.vscode/settings.json`,JSON.stringify(settings,null,2))

  console.log('✓ Updated VSCode settings with gitignore patterns')
}
updateSettings()