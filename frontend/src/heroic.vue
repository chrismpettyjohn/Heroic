<template>
  <div class="full-height">

    <!-- App Loading -->
    <div
      v-if="!state.ready"
      class="container row"
      style="margin-top:10%;">
      <div class="col-4"/>
      <div class="col-4">
        <loading>We are preparing your experience</loading>
      </div>
    </div>

    <!-- App Content -->
    <div
      v-if="state.ready"
      class="full-height">

      <!-- Guest Area -->
      <div v-if="!user"/>

      <!-- User Area -->
      <div
        v-if="user"
        class="full-height">

        <!-- Regular -->
        <div
          v-if="!client"
          class="content full-height">
          <app-header/>
          <main class="wrapper wrapper--content">
            <router-view/>
          </main>
        </div>

        <!-- Client -->
        <client :class="{ 'hide-client': !client, 'show-client': client }"/>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .hide-client {
    visibility: hidden;
    z-index: -100 !important;
  }
  .show-client {
    visibility: visible;
    z-index: 100 !important;
  }
</style>

<script>
import Client from '@/components/client'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'
import Header from '@/components/header/base'
export default {
  components: {
    'AppHeader': Header,
    'Client': Client
  },
  data () {
    return {
      state: {
        ready: false
      }
    }
  },
  computed: {
    user () {
      return Session.getters.active
    },
    client () {
      return Session.getters.client
    }
  },
  async created () {
    await Settings.dispatch('init')
    await Session.dispatch('init')
    this.state.ready = true
  }
}
</script>
