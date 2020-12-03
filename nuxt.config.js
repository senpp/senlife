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

  modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/pwa'],

  auth: {
    strategies: {
      github: {
        client_id: '6619c7d24825b744eac5',
        client_secret: 'cde9661782e4c693546bdf49956e15deef5b98e7',
      },
    },
  },
}
