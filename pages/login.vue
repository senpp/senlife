<template>
  <div class="container">
    <div>
      <h1 class="title">senlife</h1>
      <div class="links">
        <button
          v-if="!$auth.loggedIn"
          class="w-full flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-700 bg-white-600 hover:bg-gray-700 hover:text-white transition-all hover:transition-all md:py-4 md:text-lg md:px-10"
          @click="loginWithGithub"
        >
          <svg
            class="fill-current mr-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          Login with GitHub
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
    async loginWithGithub() {
      try {
        const res = await this.$auth.loginWith('github')
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
