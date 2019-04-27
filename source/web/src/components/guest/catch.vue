<template>
  <heroic-loading />
</template>

<script>
import { Store } from '../../app'

export default {
  mounted () {
    if (Store.Session.getters.session.status) return this.$router.push({ name: 'Home.Home' })
    return this.$router.push({ name: 'Guest.Login' })
  }
}
</script>
