// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  components: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
    }
  },
  css: [
    "~/assets/scss/main.scss"
  ],
  modules: ['@pinia/nuxt'],
  pinia: { autoImports: ['defineStore', 'storeToRefs'] },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
    app: {
      apiKey: process.env.API_KEY
    }
  },
})
