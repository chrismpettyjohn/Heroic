<template>
  <heroic-container title="Photos" :loading="loading" :header="header">
    <div v-if="photos" class="heroic-photo-list">
      <div v-for="photo in photos" :key="photo.id" class="heroic-card">
        <div class="heroic-card-content">
          <div class="item-photo">
            <div class="image" :style="{backgroundImage: `url(${photo.url})`}" />
            <div class="photo-meta">
              {{ photo.timestamp | moment("MMM D, YYYY") }}
            </div>
          </div>
          <ul class="user-list">
            <li @click="$router.push({ name: 'Home.Profile', params: { username: photo.author.username} })" class="no-box">
              <heroic-imager as-portrait="1" :figure="photo.author.look" :online="photo.author.online" action="std" gesture="sml" direction="4" head-direction="4" size="m" />
              <div class="user-info">
                <span class="username">{{ photo.author.username }}</span>
                <span class="motto">{{ photo.author.motto }}</span>
              </div>
              <div class="user-info-extended"/>
            </li>
          </ul>
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
      settings: Store.Settings.getters.settings,
      photos: null,
      header: {
        hasHeader: true,
        title: 'Photos from ' + Store.Settings.getters.settings['site.name'],
        description: 'Have a look at some of the great moments captured by Habbos around the hotel.'
      }
    }
  },
  mounted: async function () {
    try {
      this.loading = true
      let photos = await API.get('camera/latest/author')
      this.photos = photos.data
      this.loading = false
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
</script>
