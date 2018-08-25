<template>
  <div>
    <!-- Page Title -->
    <page-title>Photos</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are getting some cool rooms for you!</loading>

    <!-- Content -->
    <section v-if="!loading" class="wrapper wrapper--content rooms-wrapper" style="margin-top:1.5%;">
      <div v-for="room in rooms" :key="room.id" class="room-item">
        <router-link :to="{ name: 'Community.Rooms.View', params: { id: room.id, data: room }}">
          <div class="room-item__thumbnail" :style="`background:url('http://arcturus.pw/camera/Chris/thumbnail_${room.id}.png');`"/>
        </router-link>
        <router-link :to="{ name: 'Community.Rooms.View', params: { id: room.id, data: room }}">
          <h2 class="room-item__title">{{ room.name }}</h2>
        </router-link>
        <p class="room-item__description">{{ room.description }}</p>
        <div>
          <router-link
            :to="{ name: 'Home.Profile', params : { username: room.owner.username }}"
            class="avatar">
            <div class="habbo-imager room__owner--user">
              <imager
                :look="room.owner.look"
                :headonly="1"/>
            </div>
            <h6 class="avatar__title">{{ room.owner.username }}</h6>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .room-item__thumbnail:before {
    background:none;
  }
</style>

<script>
import API from '@/app/api'
export default {
  data () {
    return {
      loading: true,
      rooms: null
    }
  },
  async mounted () {
    try {
      let rooms = await API.get('room/random/owner')
      this.rooms = rooms.data
      this.loading = false
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  }
}
</script>
