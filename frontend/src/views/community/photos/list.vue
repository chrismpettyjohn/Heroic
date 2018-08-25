<template>
  <div>
    <!-- Page Title -->
    <page-title>Photos</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching the latest photos!</loading>

    <!-- Content -->
    <div v-if="!loading" class="columns" style="margin-top:2.5%;">
      <article>
        <h1>User Photos</h1>
        <p>Look at these beautiful pictures of our users having a good time!</p>
      </article>
      <div v-cloak v-for="photo in photos" :key="photo.id" class="habbo-card">
        <div class="card">
          <div class="card__content">
            <router-link :to="{ name: 'Community.Photos.View', params: { id: photo.id, data: photo }}" class="card__link">
              <div class="card__image__aligner">
                <img :src="photo.url" class="card__image card__image--photo">
              </div>
            </router-link>
            <div class="card__meta">
              <time>{{ photo.timestamp | date }}</time>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'Home.Profile', params: { username: photo.author.username } }" class="avatar">
              <imager :look="photo.author.look" :headonly="1"/>
              <h6 class="avatar__title">{{ photo.author.username }}</h6>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  article {
    margin-left: .75%;
  }
  article p {
    margin-top: -1.5%;
  }
  .columns {
    display: inline-block;
  }
  .columns .habbo-card {
    display: inline-block;
  }
</style>

<script>
import API from '@/app/api'
import Moment from 'moment'
export default {
  filters: {
    date (value) {
      return Moment.unix(value).format('MMM D, YYYY')
    }
  },
  data () {
    return {
      loading: true,
      photos: null
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
