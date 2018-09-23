<template>
  <div class="heroic">
    <heroic-loading v-if="!ready">Preparing your experience</heroic-loading>
    <div v-if="ready" class="h-100">
      <heroic-header v-if="session.status" />
      <router-view />
      <heroic-client v-if="session.status" :class="{ 'show-client': showClient }" />
      <heroic-footer :class="{ 'hide': showClient }" />
    </div>
  </div>
</template>

<script>
import { Store } from '../app'

export default {
  data () {
    return {
      ready: false,
      showClient: false
    }
  },
  computed: {
    session: () => {
      return Store.Session.getters.session
    }
  },
  async created () {
    await Store.Settings.dispatch('load')
    await Store.Session.dispatch('load')

    if (Store.Session.getters.loaded) this.ready = true
  },
  watch: {
    '$route' (to, from) {
      if (this.session.status) {
        if (to.name === 'Home.Client') this.showClient = true
        else this.showClient = false
      }
    }
  }
}
</script>
