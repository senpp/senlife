<template>
  <div class="container">
    <div>
      <h1 class="title">senlife</h1>
      <div class="links">
        <button
          v-if="!$auth.loggedIn"
          class="w-full flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-700 bg-white-600 hover:bg-gray-700 hover:text-white transition-all hover:transition-all md:py-4 md:text-lg md:px-10"
          @click="loginWithGoogle"
        >
          Login with Google
        </button>

        <template v-else>
          <div class="flex items-center justify-center">
            Logged in with <img class="w-8" :src="$auth.user.avatar_url" />
            {{ $auth.user.name }}
          </div>

          <nuxt-link
            to="dashboard"
            class="mt-4 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Go to dashboard
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',

  methods: {
    async loginWithGoogle() {
      try {
        const res = await this.$auth.loginWith('google')
        // eslint-disable-next-line no-console
        console.log(res)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
