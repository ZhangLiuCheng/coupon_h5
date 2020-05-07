import Vue from 'vue'
import Share from './share.vue'

Vue.config.productionTip = false

import {setRem} from "@/js/rem";
setRem();

new Vue({
  el: '#app',
  components: { Share },
  template: '<Share/>'
})
