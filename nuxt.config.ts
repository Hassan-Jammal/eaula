// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ["~/assets/sass/app.sass"],
    pages: true,
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            titleTemplate: "%seaula",
            htmlAttrs: {
                lang: "en",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/images/favicon-64x64.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/images/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/images/favicon-16x16.png",
                },
                {
                    rel: "apple-touch-icon",
                    type: "image/png",
                    href: "/images/apple-touch-icon-180x180.png",
                },
                {
                    rel: "mask-icon",
                    href: "/images/icons/mask-icon.svg",
                    color: "#32393C",
                },
                {
                    rel: "icon",
                    sizes: "192x192",
                    href: "/images/android-chrome-192x192.png",
                },
                {
                    rel: "icon",
                    sizes: "512x512",
                    href: "/images/android-chrome-512x512.png",
                },
            ],
            meta: [
                { name: "theme-color", content: "#AEB4BD" },
                { name: "format-detection", content: "telephone=no" },
                { name: "author", content: "eaula" },
                { name: "og:site_name", content: "eaula" },
                { name: "og:image:alt", content: "eaula" },
                { name: "og:image:width", content: "1200" },
                { name: "og:image:height", content: "630" },
                { name: "mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
                { name: "robots", content: "index, follow" },
            ],
        }
    },
    // tailwindcss: {
    // 	editorSupport: true
    // },
    image: {
        provider: "twicpics",
    },
    aos: {
        once: true, // whether animation should happen only once - while scrolling down
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', "@nuxt/image", "nuxt-aos"]
})