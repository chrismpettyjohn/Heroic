import Vue from 'vue'
import Heroic from '@/heroic'
import router from '@/app/router'
import Session from '@/app/session'
import Components from '@/components/global'

// Turn off tips
Vue.config.productionTip = false
Vue.config.silent = true

// Satisfy Vue-Lint
new Components()
// Prepare Session
new Session()

// Initialize Vue
new Vue({
  router,
  el: '#app',
  render: h => h(Heroic),
  assetsPublicPath: '/public/'
})
