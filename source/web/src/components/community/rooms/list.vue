<template>
  <heroic-container title="Rooms" :loading="loading" :header="header">
    <div v-if="rooms" class="heroic-room-list">
      <div v-for="room in rooms" :key="room.id">
        <div class="heroic-card h-100 no-margin">
          <div class="heroic-card-header" @click="$router.push({ name: 'Community.Rooms.View', params: { id: room.id} })" style="cursor:pointer;">
            <span class="header">{{ room.name }}</span>
            <span class="description">{{ room.description }}</span>
          </div>
          <div class="heroic-card-content flex">
            <heroic-thumbnail :id="room.id" />
            <ul class="user-list">
              <li @click="$router.push({ name: 'Home.Profile', params: { username: room.owner.username} })" class="no-bg no-box">
                <heroic-imager as-portrait="1" :figure="room.owner.look" :online="room.owner.online" action="std" gesture="sml" direction="4" head-direction="4" size="m" />
                <div class="user-info">
                  <span class="username">{{ room.owner.username }}</span>
                  <span class="motto">{{ room.owner.motto }}</span>
                </div>
                <div class="user-info-extended"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </heroic-container>
</template>

<script>
import { API, Store } from '../../../app'

export default {
  data () {
    return {
      loading: false,
      rooms: null,
      header: {
        hasHeader: true,
        title: 'Room Gallery',
        description: `Check out some of the most popular rooms within ${Store.Settings.getters.settings['site.name']} right now!`
      }
    }
  },
  mounted: async function () {
    try {
      this.loading = true
      let rooms = await API.get('room/random/owner')
      this.rooms = rooms.data
      this.loading = false
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
</script>
