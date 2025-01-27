export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    useStylesheet: true,
    preload: true,
    preconnect: true,
    prefetch: true,
    display: 'swap',
    families: {
      'Dela Gothic One': {
        wght: [400],
      },
      'Azeret Mono': {
        wght: [300, 600],
      },
    },
  },

  compatibilityDate: '2025-01-27',
})