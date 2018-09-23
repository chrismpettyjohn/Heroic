import Vue from 'vue'
import Container from './container'
import Footer from './footer'

export default {
  async init () {
    Vue.component('heroicContainer', Container)
    Vue.component('heroicFooter', Footer)
  }
}
