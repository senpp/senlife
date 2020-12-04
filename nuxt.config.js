export default {
  ssr: false,

  head: {
    title: 'SenLife',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  plugins: ['@/plugins/filters'],

  components: false,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth-next'],

  auth: {
    strategies: {
      google: {
        clientId:
          '226508594082-eomccj5ob00802toe687vsossl47e1mt.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
      },
    },
  },
}
