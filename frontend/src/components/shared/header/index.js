import Vue from 'vue'
import Base from './base'
import Navigation from './navigation'
import User from './user'

export default {
  async init () {
    Vue.component('heroicHeader', Base)
    Vue.component('heroicHeaderNavigation', Navigation)
    Vue.component('heroicHeaderUser', User)
  }
}
