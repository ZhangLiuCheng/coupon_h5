import Vue from 'vue'
import Withdraw from './withdraw.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Withdraw },
  template: '<Withdraw/>'
})
