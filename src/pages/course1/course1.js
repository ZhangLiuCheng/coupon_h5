import Vue from 'vue'
import Course1 from './course1.vue'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

import {setRem} from "@/js/rem";
setRem();

new Vue({
  el: '#app',
  components: { Course1 },
  template: '<Course1/>'
})
