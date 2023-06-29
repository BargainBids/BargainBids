// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-vuefire'
  ],

  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyBT8eLeWjW3wzgbtuP11q3YE86SxvxqpkM",
      authDomain: "bargainbids23.firebaseapp.com",
      projectId: "bargainbids23",
      storageBucket: "bargainbids23.appspot.com",
      messagingSenderId: "175442582499",
      appId: "1:175442582499:web:0ae391dda639064c5d1ed6",
      measurementId: "G-81GBRV9TMT"
    },
    admin: {
      serviceAccount: './server/firebase/bargainbids23-firebase-adminsdk-4npwg-62a5652b24.json',
    }
  },
  // @ts-ignore
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  // @ts-ignore
  css: [
    '@/server/scss/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    quality: 80,
    formats: ['webp'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    },
  }
})
