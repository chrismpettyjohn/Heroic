<template>
  <span/>
</template>

<script>
import Settings from '@/app/storage/settings'
export default {
  data () {
    return {
      page: this.$slots.default[0].text,
      name: Settings.getters.site['site.name']
    }
  },
  mounted () {
    document.title = `${this.name}: ${this.page}`
  }
}
</script>
