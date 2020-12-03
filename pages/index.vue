<template>
  <div class="container">
    <div>
      <h1 class="title">senlife</h1>
      <div class="links">
        <template v-if="!$auth.loggedIn">
          <nuxt-link to="login">Login</nuxt-link>
        </template>

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
export default {}
</script>
