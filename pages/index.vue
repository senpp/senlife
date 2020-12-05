<template>
  <div class="container">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center md:items-end sm:block sm:p-0"
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
          class="inline-block align-bottom bg-white rounded-lg text-left w-full overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 py-6">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
              >
                <span class="text-red-600 text-3xl">👋</span>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  id="modal-headline"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Welcome back.
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{
                      !$auth.loggedIn
                        ? 'Log in to continue to SenLife.'
                        : 'Go to dashboard to start using the app.'
                    }}
                  </p>

                  <div v-if="$auth.loggedIn" class="w-full block md:hidden">
                    <div class="text-center my-4">
                      <img
                        :src="$auth.user.picture"
                        :alt="`${$auth.user.name} - Avatar's`"
                        class="w-16 rounded-full inline-block ring-2 ring-indigo-600 ring-offset-2 cursor-pointer transform hover:scale-105 transition duration-200"
                      />

                      <p class="text-base font-semibold text-gray-600 mt-2">
                        {{ $auth.user.name }}
                        <span class="block text-sm text-gray-400 font-normal">
                          {{ $auth.user.email }}
                        </span>
                      </p>
                    </div>
                  </div>

                  <nuxt-link
                    v-if="$auth.loggedIn"
                    to="/dashboard"
                    class="w-full inline-flex justify-center items-center rounded-md border-2 px-4 py-2 mt-4 text-base font-medium text-indigo-600 border-indigo-500 bg-transparent hover:bg-indigo-600 transition duration-200 ease-in-out hover:text-white hover:border-transparent transition focus:outline-none sm:w-auto sm:text-sm"
                  >
                    Go to Dashboard
                  </nuxt-link>
                </div>
              </div>
              <div v-if="$auth.loggedIn" class="ml-auto hidden md:block">
                <img
                  :src="$auth.user.picture"
                  :alt="`${$auth.user.name} - Avatar's`"
                  class="w-16 rounded-full ring-2 ring-indigo-600 ring-offset-2 cursor-pointer transform hover:scale-105 transition duration-200"
                />
              </div>
            </div>
          </div>
          <div
            v-if="!$auth.loggedIn"
            class="bg-gray-50 border-t border-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <nuxt-link
              to="/login"
              class="w-full inline-flex justify-center items-center rounded-md border px-4 py-2 bg-white text-base font-medium text-gray-700 hover:ring-2 hover:ring-gray-300 hover:text-gray-900 hover:ring-opacity-20 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              <svg
                class="w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Go to Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
