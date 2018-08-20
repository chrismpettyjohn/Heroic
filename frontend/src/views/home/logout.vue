<template>
	<span>You have been logged out.</span>
</template>

<script>
import Session from '@/app/storage/session'
export default {
  async mounted () {
    // Logout
    await Session.dispatch('logout')
    // Redirect
    this.$router.push({ name: 'Guest.Login' })
  }
}
</script>
