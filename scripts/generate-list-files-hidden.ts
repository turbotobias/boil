const root_dir = process.env.TEST_ROOT_DIR || `${import.meta.dir}/..`

// (ai) read the source file
const settings = JSON.parse(await Bun.file(`${root_dir}/.vscode/settings.json`).text())
const gitignore = await Bun.file(`${root_dir}/.gitignore`).text()
const hidden_list = await Bun.file(`${root_dir}/.list-files-hidden`).text()
Bun.stdout.write(`(ai) found ${hidden_list.split('\n').length} hiddenlist patterns\n`)

// (ai) process gitignore lines
const patterns = [hidden_list, gitignore]
  .flatMap((content) => content.split('\n'))
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((pattern) => ({
    [pattern]: true,
    [`**/${pattern}`]: true, // (ai) handle nested patterns
    [`**/${pattern.replace(/\/$/, '')}/**`]: true, // (ai) handle directory patterns, remove trailing slash before adding /**
  }))
  .reduce((acc, curr) => Object.assign(acc, curr), {})

// (ai) update vscode settings
settings['__PLEASE_DO_NOT_CHANGE_GENERATED_SETTINGS_BELOW__CHANGE_SCRIPT_LIST_FILES_HIDDEN_INSTEAD__👇'] =
  true
settings['search.exclude'] = Object.assign({}, settings['search.exclude'], patterns)
settings['files.exclude'] = Object.assign({}, settings['files.exclude'], patterns)
settings['files.watcherExclude'] = { ...settings['files.watcherExclude'], ...patterns }

// (ai) write updated settings
await Bun.write(`${root_dir}/.vscode/settings.json`, JSON.stringify(settings, null, 2))

console.log('✓ updated vscode ignore list')
