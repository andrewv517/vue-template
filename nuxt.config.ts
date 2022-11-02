// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: ['nuxt-storm', '@pinia/nuxt'],
})
