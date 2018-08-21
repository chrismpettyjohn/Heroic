<template>
  <span>Redirecting you</span>
</template>

<script>
  import Session from '@/app/storage/session'
  export default {
    data() {
      return {
        session: Session.getters.active
      }
    },
    mounted() {
      if (this.session) {
        this.$router.push({ name: 'Home.Me' })
      } else {
        this.$router.push({ name: 'Guest.Login' })
      }
    }
  }
</script>