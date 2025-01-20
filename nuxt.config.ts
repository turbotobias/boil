// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'nitro-cloudflare-dev',
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    preset: 'cloudflare-pages',
  },
})
