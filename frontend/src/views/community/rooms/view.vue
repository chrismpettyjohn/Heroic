<template>
  <div>
    <!-- Page Title -->
    <page-title>Viewing Room</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are getting some info about this room</loading>

    <!-- Content -->
    <div
      v-if="!loading"
      class="row">
      <div class="col-2">
        <div class="room__thumbnail row"/>
        <router-link
          :to="{ name : 'user.home.profile', params : { username : room.owner.username }}"
          class="avatar row">
          <div class="habbo-imager room__owner--user">
            <imager
              :look="room.owner.look"
              headonly="true"/>
          </div>
          <h6 class="avatar__title">{{ room.owner.username }}</h6>
        </router-link>
      </div>

      <div class="col-6">
        <h1 class="room__content__title">
          {{ room.name }}
        </h1>
        <div class="room__content__left">
          <ul class="room-info">
            {{ room.description }}
          </ul>
        </div>
      </div>

      <div class="col-4">
        <div class="room__details">
          <h3>Room details</h3>
          <dl>
            <dt>Rating</dt>
            <dd>{{ room.score }}</dd>
            <dt>Max users</dt>
            <dd>{{ room.users_max }}</dd>
          </dl>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import API from '@/app/api'
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: 1
    },
    data: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      loading: true,
      room: null
    }
  },
  async mounted () {
    if (this.data === undefined) {
      try {
        let room = await API.get(`room/${this.id}/owner`)
        this.room = room.data
        this.loading = false
      } catch (e) {
        this.$router.push({ name: 'Community.Rooms.List' })
      }
    } else {
      this.room = this.data
      this.loading = false
    }
  }
}
</script>
