<template>
  <div class="app">

    <div
      v-if="ready"
      class="app">
      <div
        :key="$route.path"
        class="content">
        <!-- Authenticated -->
        <div v-if="user">
          <div v-if="!client">
            <heroic-header/>
            <main
              class="wrapper wrapper--content"
              style="height:100%;">
              <router-view/>
            </main>
          </div>
          <div v-if="client">
            <router-view/>
          </div>
        </div>
        <!-- Not Authenticated -->
        <router-view v-if="!user"/>
      </div>
    </div>

    <div
      v-if="!ready"
      id="app">
      <div
        class="container row"
        style="margin-top:10%;">
        <div class="col-4"/>
        <div class="col-4">
          <loading>We are preparing your experience</loading>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .app {
    position: relative;
    height: 100%;
  }
  .content {
    min-height: 100%;
  }
  main {
    min-height:100%;
  }
</style>

<script>
import Footer from '@/components/footer'
import Session from '@/app/storage/session'
import Header from '@/components/header/base'
import Settings from '@/app/storage/settings'
export default {
  components: {
    'HeroicHeader': Header,
    'HeroicFooter': Footer
  },
  data () {
    return {
      ready: false,
      client: false
    }
  },
  computed: {
    user () {
      return Session.getters.active
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Home.Client') {
        this.client = true
      } else {
        this.client = false
      }
    }
  },
  async created () {
    await Settings.dispatch('init')
    await Session.dispatch('init')
    this.ready = true
  }
}
</script>
