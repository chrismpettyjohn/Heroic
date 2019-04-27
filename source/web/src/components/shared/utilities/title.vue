<template>
  <span/>
</template>

<script>
import { Store } from '../../../app'

export default {
  data () {
    return {
      page: this.$slots.default[0].text,
      name: Store.Settings.getters.settings['site.name']
    }
  },
  mounted () {
    document.title = `${this.name}: ${this.page}`
  }
}
</script>
