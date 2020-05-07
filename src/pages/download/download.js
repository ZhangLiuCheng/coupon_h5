import Vue from 'vue'
import Download from './download.vue'

Vue.config.productionTip = false

import {setRem} from "@/js/rem";
setRem();

new Vue({
  el: '#app',
  components: { Download },
  template: '<Download/>'
})
