// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue-macros/nuxt', '@nuxtjs/tailwindcss', 'nuxt-svgo', '@vueuse/nuxt', 'vue3-carousel-nuxt', '@pinia/nuxt', '@nuxtjs/supabase']
})
