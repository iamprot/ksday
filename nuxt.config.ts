import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: false },
    modules: [
      "@nuxt/eslint",
      "@nuxtjs/google-fonts",
      "@nuxt/icon",
      "@nuxt/image",
      "@vueuse/motion/nuxt",
      "@nuxtjs/color-mode",
    ],
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png?v=2" },
            ],
            htmlAttrs: {
                lang: "ru",
            },
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    runtimeConfig: {
        yandexUserToken: 'y0__wgBEO_RnqCq94ACGL2LRiD18eu0GDgC4OKsnbEi_vMmq0tZhFjbL7pw',
        yandexFormId: '6a64ad37068ff0a757f34fee',
        yandexOrgId: '3502018',
    },
    motion: {
        directives: {
            "pop-bottom": {
                initial: {
                    y: 12,
                    opacity: 0,
                },
                visibleOnce: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 300,
                    },
                },
            },
        },
    },
    css: ["./assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    googleFonts: {
        families: {
            Onest: "100..900",
        },
    },
});