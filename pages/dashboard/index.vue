<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="p-4 container mx-auto">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Import JSON file
              </label>
              <div
                class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        @change="loadJsonFromFile"
                      />
                    </label>
                  </div>
                  <p class="text-xs text-gray-500">JSON up to 10MB</p>
                  <p
                    class="relative text-sm cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    @click.prevent.stop="download(sampleData)"
                  >
                    sample.json
                  </p>
                </div>
              </div>
            </div>

            <div v-if="data">
              <label class="block text-sm font-medium text-gray-700">
                Preview data
              </label>

              <div>
                <dl>
                  <div
                    class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
                  >
                    <dt class="text-sm font-medium text-gray-500">Salary</dt>
                    <dd
                      class="mt-1 font-medium text-green-600 sm:mt-0 sm:col-span-3"
                    >
                      {{ data.salary ? data.salary : null | formatNumber }} đ
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <dl>
                  <div
                    class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
                  >
                    <dt class="text-sm font-medium text-gray-500">Method</dt>
                    <dd class="mt-1 text-sm font-medium sm:mt-0 sm:col-span-3">
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option
                          v-for="method in methodOptions"
                          :key="method.id"
                        >
                          {{ method.label }}
                        </option>
                      </select>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div v-if="data" class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click.prevent.stop="estimate"
            >
              Try to estimate
            </button>
          </div>
        </div>
      </form>
    </div>

    <template v-if="estimateData">
      <div class="container mx-auto p-4 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Totals
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="field in estimateData" :key="field.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-gray-900">
                        {{ field.label }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ field.description }}
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="font-medium text-red-600">
                        {{ field.value | formatNumber }} đ
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          v-if="savingData"
          class="-my-2 mt-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="block font-medium text-gray-700 mb-4">Savings</div>
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Month
                    </th>

                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Funds
                    </th>

                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Profits
                    </th>

                    <th
                      scope="col"
                      class="bg-white px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      % Profits
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="field in savingData" :key="field.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-gray-900">
                        {{ field.month }}
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="font-medium text-gray-600">
                        {{ field.funds | formatNumber }} đ
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="font-medium text-green-600">
                        {{ field.profits | formatNumber }} đ
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="font-medium text-blue-600">
                        {{ field.profitPercents }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AuthPage from '@/components/base/AuthPage'
import JsonMixin from '@/mixins/Json'
import SampleData from '@/static/sample/sample.json'

export default AuthPage.extend({
  data: () => ({
    methodOptions: [
      {
        id: '50_20_30',
        label: '50/20/30 method',
      },
    ],

    estimateData: null,
    savingData: null,
    sampleData: SampleData,
  }),

  mixins: [JsonMixin],

  methods: {
    estimate() {
      try {
        if (!this.data || !this.data.salary) throw new Error('Data not found.')
        const salary = parseInt(this.data.salary)
        this.estimateData = this.rule502030(salary)
      } catch (err) {
        this.errors = err
      }
    },

    savings(startFunds) {
      const months = [...Array(12).keys()]

      return months.map((month) => {
        const curMonth = month + 1
        const funds = startFunds * curMonth
        const profitPercents = '3.65%'
        const profits = ((funds * 0.0365) / 360) * 30
        return {
          month: curMonth,
          funds,
          profits,
          profitPercents,
        }
      })
    },

    rule502030(salary) {
      const needs = salary * 0.5
      const wants = salary * 0.3
      const savings = salary * 0.2
      this.savingData = this.savings(savings)
      return [
        {
          id: 'needs',
          label: 'Needs',
          description:
            'Needs are those bills that you absolutely must pay and are the things necessary for survival.',
          value: needs,
        },
        {
          id: 'wants',
          label: 'Wants',
          description:
            'Wants are all the things you spend money on that are not absolutely essential.',
          value: wants,
        },
        {
          id: 'savings',
          label: 'Savings',
          description:
            'Saving are try to allocate 20% of your net income to savings and investments.',
          value: savings,
        },
      ]
    },
  },
})
</script>
