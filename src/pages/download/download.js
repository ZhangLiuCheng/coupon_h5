import Vue from 'vue'
import Download from './download.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Download },
  template: '<Download/>'
})
