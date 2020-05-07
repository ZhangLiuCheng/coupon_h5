import Vue from 'vue'
import Share from './share.vue'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

Vue.config.productionTip = false

import {setRem} from "@/js/rem";
setRem();

new Vue({
  el: '#app',
  components: { Share },
  template: '<Share/>'
})
