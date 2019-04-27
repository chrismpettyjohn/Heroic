<template>
  <div class="heroic-home-logout flex flex-12">
    <heroic-title>Logout</heroic-title>
    logout
  </div>
</template>

<script>
import { Store } from '../../app'

export default {
  async mounted () {
    try {
      await Store.Session.dispatch('logout')
      this.$router.push({ name: 'Guest.Login' })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
