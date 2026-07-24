import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
  ],
motion: {
        directives: {
          'pop-bottom': {
            initial: {
              y: 12,
              opacity: 0,
            },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 300,
              }
            }
          }
        }
      },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  googleFonts: {
        families: {
            Onest: '200..900',
        },
    },
})