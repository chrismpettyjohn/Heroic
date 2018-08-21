<template>
  <div>
    <!-- Page Title -->
    <page-title>Photos</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are getting rooms with guests</loading>

    <!-- Content -->
    <div v-if="!loading">
      Woooo
    </div>
  </div>
</template>

<script>
  import API from '@/app/api'
  export default {
    data() {
      return {
        loading: true,
        rooms: null
      }
    },
    async mounted() {
      try {
        let rooms = await API.get('rooms/active')
        this.rooms = rooms.data
      } catch (e) {
        this.$router.push({ name : 'Errors.500' })
      }
    }
  }
</script>