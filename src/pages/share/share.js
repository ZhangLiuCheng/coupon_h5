import Vue from 'vue'
import Share from './share.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Share },
  template: '<Share/>'
})
