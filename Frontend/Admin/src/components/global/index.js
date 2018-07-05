import Vue from 'vue'
import Error from './error'
import Title from './title'
import Header from './header'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Loading from './loading'
export default class Component {
  constructor () {
    // System
    Vue.component('Error', Error)
    Vue.component('Loading', Loading)
    Vue.component('PageTitle', Title)
    // Template
    Vue.component('Navbar', Navbar)
    Vue.component('Sidebar', Sidebar)
    Vue.component('PageHeader', Header)
  }
}
