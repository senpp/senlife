import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('formatNumber', (val) => {
  return numeral(val).format('0,0')
})
