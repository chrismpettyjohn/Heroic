import Vue from 'vue'
import Header from './header'
import Layout from './layout'
import Utilities from './utilities'
import Client from './client'

export default {
  async init () {
    Header.init()
    Layout.init()
    Utilities.init()

    Vue.component('heroicClient', Client)
  }
}
