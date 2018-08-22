import Vue from 'vue'
import Vuex from 'vuex'
import heroic from './heroic'
import router from '@/app/router'
import Components from '@/components'

// Enable Storage (Vuex)
Vue.use(Vuex)

// Enable Utility Components
Components.init()

// Disable Tips
Vue.config.productionTip = false

// Initialize
new Vue({
  router,
  render: h => h(heroic)
}).$mount('#app')
