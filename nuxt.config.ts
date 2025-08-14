// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },
  css: [
    '~/assets/css/main.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
})