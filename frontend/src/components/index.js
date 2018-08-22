// Dependencies
import Vue from 'vue'
import Utility from './utility'

//

// Function (due to eslint)
const component = {
  async init () {
    Vue.component('PageTitle', Utility.Title)
    Vue.component('Imager', Utility.Imager)
    Vue.component('Loading', Utility.Loading)
  }
}

// Export
export default component
