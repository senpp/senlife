import Vue from 'vue'

const AuthPage = Vue.extend({
  middleware: 'auth',

  data() {
    return {
      errors: null,
    }
  },
})

export default AuthPage
