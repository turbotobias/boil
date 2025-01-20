import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.vue'] },
  { languageOptions: { globals: { ...globals.browser,...globals.node } } },
  ...pluginVue.configs['flat/essential'],
  { languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      semi: ['error','never'],
      'vue/multi-word-component-names': 'off'
    }
  },
  { ignores: ['.nuxt/*','.output/*','node_modules/*','bun.lockb'] },
]
