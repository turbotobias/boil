// (ai) get the root directory (one level up from scripts)
const root_dir = `${import.meta.dir}/..`

// (ai) read the source file
const rules_file = Bun.file(`${root_dir}/.list-rules-ai`)
const rules_content = await rules_file.text()

// (ai) write to target files
const target_files = ['.cursorrules', '.windsurfrules', 'readme.md']

for (const file_name of target_files) {
  const file_path = `${root_dir}/${file_name}`
  await Bun.write(file_path, rules_content)
  const rules_count = rules_content.split('\n').length
  console.log(`(ai) copied ${rules_count} rules to ${file_name}`)
}

console.log('✔️ ai rules generated successfully')
