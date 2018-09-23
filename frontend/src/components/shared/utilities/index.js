import Vue from 'vue'
import Imager from './imager'
import Loading from './loading'
import TextareaAutosize from './textareaAutosize'
import Thumbnail from './thumbnail'
import Timeago from './timeago'
import Title from './title'

export default {
  async init () {
    Vue.component('heroicImager', Imager)
    Vue.component('heroicLoading', Loading)
    Vue.component('textarea-autosize', TextareaAutosize)
    Vue.component('heroicThumbnail', Thumbnail)
    Vue.component('heroicTimeago', Timeago)
    Vue.component('heroicTitle', Title)
  }
}
