import Vue from 'vue'
import Moment from 'moment'
import Heroic from '@/heroic'
import router from '@/app/router'
import Website from '@/app/website'
import Session from '@/app/session'
import Directives from '@/app/directives'
import Components from '@/components/global'

// Turn off tips
Vue.config.productionTip = false
Vue.config.silent = true

// Prepare Website 
new Website()

// Prepare Session
new Session()

// Add Filters
Vue.filter('currency', function (value) {
  var newValue = value
  if (value >= 1000) {
    var suffixes = ['', 'k', 'm', 'b', 't']
    var suffixNum = Math.floor(('' + value).length / 3)
    var shortValue = ''
    var shortNum = ''
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision))
      var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '')
      if (dotLessShortValue.length <= 2) {
        break
      }
    }
    if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1)
    newValue = shortValue + suffixes[suffixNum]
  }
  return newValue
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return Moment(String(value)).format('MMMM DD, YYYY')
  }
})

// Initialize Vue
new Vue({
  router,
  el: '#app',
  render: h => h(Heroic),
  assetsPublicPath: '/public/'
})
