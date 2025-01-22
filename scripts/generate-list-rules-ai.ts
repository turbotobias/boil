// (ai) get the root directory (one level up from scripts)
const root_dir = `${import.meta.dir}/..`

// (ai) read the source file
const rules_file = Bun.file(`${root_dir}/list-rules-ai.md`)
const rules_content = await rules_file.text()

// (ai) write to target files
const target_files = ['.cursorrules', '.windsurfrules']

for (const file_name of target_files) {
  const file_path = `${root_dir}/${file_name}`
  await Bun.write(file_path, rules_content)
  const rules_count = rules_content.split('\n').length
  console.log(`(ai) copied ${rules_count} rules to ${file_name}`)
}

// (ai) replace the content in readme.md from the # (generated) position
const readme_file = Bun.file(`${root_dir}/readme.md`)
const readme_content = await readme_file.text()
const readme_content_updated = readme_content.replace('# (generated)', `# (generated)\n\n${rules_content}`)
await Bun.write(`${root_dir}/readme.md`, readme_content_updated)

console.log('✔️ ai rules generated successfully')
