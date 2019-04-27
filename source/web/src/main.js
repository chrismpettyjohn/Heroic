import Vue from 'vue'
import Vuex from 'vuex'
import VueMoment from 'vue-moment'
import { Router } from './app'
import { Heroic, Shared } from './components'

Vue.use(Vuex)
Vue.use(VueMoment)

Shared.init()

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(Heroic)
}).$mount('#app')
