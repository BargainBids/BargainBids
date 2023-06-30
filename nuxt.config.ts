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
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_AUTH_PROJECT_ID,
      storageBucket: process.env.FIREBASE_AUTH_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_AUTH_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_AUTH_APP_ID,
      measurementId: process.env.FIREBASE_AUTH_MEASUREMENT_ID
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
