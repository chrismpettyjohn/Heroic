import Vue from 'vue'
import Vuex from 'vuex'
import heroic from './heroic'
import router from '@/app/router'
import Filters from '@/app/filters'
import Components from '@/components'
import Storage from '@/app/helpers/storage'

// Enable Storage (Vuex)
Vue.use(Vuex)

// Disable Tips
Vue.config.productionTip = false

// Initialize
new Vue({
  router,
  render: h => h(heroic)
}).$mount('#app')
