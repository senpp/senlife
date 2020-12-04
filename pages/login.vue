<template>
  <div class="container">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="text-center mb-4 text-sm font-medium text-gray-500">
              Sign in to access you personalized dashboard.
            </div>
            <button
              type="button"
              class="w-full inline-flex justify-center items-center rounded-md border px-4 py-2 bg-white text-base font-medium text-gray-700 hover:ring-2 hover:ring-gray-300 hover:text-gray-900 hover:ring-opacity-20 focus:outline-none sm:text-sm"
              @click.prevent.stop="loginWithGoogle"
            >
              <svg
                class="h-6 w-6 mr-2"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Google"
                role="img"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path
                  fill="#4285f4"
                  d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
                />
                <path
                  fill="#34a853"
                  d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
                />
                <path
                  fill="#fbbc02"
                  d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
                />
                <path
                  fill="#ea4335"
                  d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
                />
              </svg>
              Login with Google
            </button>

            <nuxt-link
              to="/"
              class="mx-auto hover:text-indigo-700 justify-center items-center w-full mt-6 text-xs text-indigo-500 inline-flex"
            >
              <svg
                class="w-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              Back to Homepage
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',

  middleware({ $auth, redirect }) {
    if ($auth.loggedIn) {
      return redirect('/')
    }
  },

  data: () => ({
    errors: null,
  }),

  methods: {
    async loginWithGoogle() {
      try {
        await this.$auth.loginWith('google')
      } catch (err) {
        this.errors = err.message
      }
    },
  },
}
</script>
