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
import { API, Store } from '../app'

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
    try {
      await Store.Settings.dispatch('load')
      await Store.Session.dispatch('load')

      if (Store.Session.getters.loaded) {
        this.ready = true
      }

      if (Store.Session.getters.session.user !== undefined) {
        this.refreshSession()
        this.refreshOnline()
        setInterval(this.refreshSession, 300000)
        setInterval(this.refreshOnline, 30000)
      }
    } catch (e) {
      this.$router.push({ name: 'System.Maintenance' })
      this.ready = true
    }
  },
  methods: {
    refreshSession () {
      API.get('session')
        .then(user => {
          let session = Store.Session.getters.session
          session.user = user.data
          Store.Session.commit('setSession', session)
        })
        .catch(() => {
          this.$router.push({ name: 'Home.Logout' })
        })
    },
    refreshOnline () {
      API.get('user/online')
        .then(users => {
          Store.Settings.commit('setUsersOnline', users.data.length)
        })
        .catch(() => {
          this.$router.push({ name: 'System.Maintenance' })
        })
    }
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
