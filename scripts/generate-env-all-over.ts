import Bun from 'bun'

async function generate_env_all_over() {
  // (ai) read input file
  const file_input = Bun.file('.env.production')
  const env_variables = await file_input.text()
  const env_variables_without_comments = env_variables.split('\n').filter((t) => t && !t.startsWith('#'))

  const env_key_values = env_variables_without_comments
    .map((c) => {
      const entries = c.split('="')
      const key = entries[0]
      const value = entries[1]?.split('"')[0]
      if (!key) throw Error(`can not generate env without valid key: ${JSON.stringify(entries)}`)
      if (!value) throw Error(`can not generate env without valid value: ${JSON.stringify(entries)}`)
      return { key, value }
    })
    .filter((y) => y)

  const env_key_values_public = env_key_values.filter((kv) => kv?.key?.startsWith('PUBLIC_'))
  const env_key_values_private = env_key_values.filter((kv) => !kv?.key?.startsWith('PUBLIC_'))

  const keys_all = env_key_values.map((kv) => kv?.key)
  const keys_public = env_key_values_public.map((kv) => kv?.key)
  const keys_private = env_key_values_private.map((kv) => kv?.key)

  const keys_types_all = keys_all.map((k) => `${k}: string\n  `).join('')
  const keys_types_public = keys_public.map((k) => `${k}: string\n  `).join('')
  const keys_types_private = keys_private.map((k) => `${k}: string\n  `).join('')

  const create_json_string = (kv: Array<{ key: string; value: string }>) => {
    const lines = kv
      .map(({ key, value }, i) => {
        const line = `"${key}": "${value}"`
        return i === kv.length - 1 ? `${line}\n` : `${line},\n  `
      })
      .join('')

    return `{\n  ${lines}}`
  }

  const create_obj_string = (kv: Array<{ key: string; value: string }>) => {
    return kv
      .map(({ key, value }) => {
        const line = `${key}: "${value}"`
        return `${line},\n  `
      })
      .join('')
  }

  const create_env_string = (kv: Array<{ key: string; value: string }>) => {
    return kv.map(({ key, value }) => `${key}="${value}"`).join('\n')
  }

  const keys_obj_all = create_obj_string(env_key_values)
  const keys_obj_public = create_obj_string(env_key_values_public)
  const keys_obj_private = create_obj_string(env_key_values_private)

  const a = `export interface TEnv {\n  ${keys_types_all}}\n\n`
  const b = `export interface TEnvPublic {\n  ${keys_types_public}}\n\n`
  const c = `export interface TEnvPrivate {\n  ${keys_types_private}}\n\n`

  const d = `import type { TEnv, TEnvPublic, TEnvPrivate } from './env.types.ts'\n\n`
  const e = `export const env: TEnv = {\n  ${keys_obj_all}\n}\n\n`
  const f = `export const env_public: TEnvPublic = {\n  ${keys_obj_public}\n}\n\n`
  const g = `export const env_private: TEnvPrivate = {\n  ${keys_obj_private}\n}\n\n`

  const env_types = a + b + c
  const env_code = d + e + f + g

  const json_all = create_json_string(env_key_values)
  const json_public = create_json_string(env_key_values_public)
  const json_private = create_json_string(env_key_values_private)
  const env_string = create_env_string(env_key_values)

  // (ai) output file paths
  const file_output_ts = Bun.file('./generated/env.ts')
  const file_output_ts_types = Bun.file('./generated/env.types.ts')
  const file_output_json_all = Bun.file('./generated/env.json')
  const file_output_json_public = Bun.file('./generated/env.public.json')
  const file_output_json_private = Bun.file('./generated/env.private.json')
  const file_output_dev_vars = Bun.file('.dev.vars')

  await Bun.write(file_output_ts, env_code)
  await Bun.write(file_output_ts_types, env_types)
  await Bun.write(file_output_json_all, json_all)
  await Bun.write(file_output_json_public, json_public)
  await Bun.write(file_output_json_private, json_private)
  await Bun.write(file_output_dev_vars, env_string)
}

generate_env_all_over()
