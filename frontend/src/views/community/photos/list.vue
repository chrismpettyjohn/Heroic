<template>
  <div>
    <!-- Page Title -->
    <page-title>Photos</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching the latest photos!</loading>

    <!-- Content -->
    <div v-if="!loading" class="columns" style="margin-top:2.5%;">
      <div v-for="photo in photos" class="habbo-card">
        <div v-cloak class="card">
          <div class="card__content">
            <router-link :to="{ name: 'Community.Photos.View', params: { id: photo.id }}" class="card__link">
              <div class="card__image__aligner">
                <img :src="photo.url" class="card__image card__image--photo"">
              </div>
            </router-link>
            <div class="card__meta">{{ photo.timestamp | date }}</time>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'Home.Profile', params: { username: photo.author.username } }" class="avatar">
              <imager :look="photo.author.look" headonly="true"/>
              <h6 class="avatar__title">{{ photo.author.username }}</h6>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/app/api'
  import Moment from 'moment'
  export default {
    data() {
      return {
        loading: true,
        photos: null
      }
    },
    filters: {
      date (value) {
        return Moment.unix(value).format('MMM D, YYYY')
      }
    },
    mounted: async function () {
      try {
        let photos = await API.get('camera/latest/author')
        this.photos = photos.data
        this.loading = false
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
</script>