// (ai) tests for generate-list-rules-ai"); script
import { expect, test } from 'bun:test'

test('generate-list-rules-ai', async () => {
  import('./generate-list-rules-ai')
  const root_dir = `${import.meta.dir}/..`

  // (ai) get source content
  const source_content = await Bun.file(`${root_dir}/list-rules-ai.yaml`).text()

  // (ai) verify each target file matches source exactly
  const target_files = ['.cursorrules', '.windsurfrules']

  for (const file_name of target_files) {
    const file_path = `${root_dir}/${file_name}`
    const file_content = await Bun.file(file_path).text()

    expect(file_content).toBe(source_content)
  }

  // verify that readme has source_content below # (generated)
  const readme_content = await Bun.file(`${root_dir}/readme.md`).text()
  const readme_content_without_generated = readme_content.split('\n# (generated)')[0]
  const readme_content_with_generated = `${readme_content_without_generated}\n# (generated)\n\n${source_content}`
  expect(readme_content).toBe(readme_content_with_generated)
})
