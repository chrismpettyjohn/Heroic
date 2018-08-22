<template>
  <div>
    <!-- Page Title -->
    <page-title>Photos</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching this photo</loading>

    <!-- Content -->
    <div v-if="!loading">
      <!-- Profile -->
      <div class="row">
        <div class="col-2"/>
        <div class="col-8">
          <div class="habbo-profile-header">
            <div class="profile-header__avatar">
              <div class="profile-header__link">
                <div class="habbo-imager profile-header__image">
                  <imager :look="photo.author.look"/>
                </div>
              </div>
            </div>
            <div class="profile-header__details">
              <h1>{{ photo.author.username }}</h1>
              <div class="profile__motto">
                {{ photo.author.motto }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Picture -->
      <div class="row">
        <div class="col-3"/>
        <div class="creation-content__expander col-11">
          <div class="creation-content__view">
            <router-link
              :to="{ name: 'Community.Photos.View', params : { id: photo.id-1 }}"
              class="creation-content__link"><i class="icon icon--arrow-prev"/></router-link>
            <img
              :src="photo.url"
              class="creation-content__creation"
              style="width:320px;height:320px">
            <router-link
              :to="{ name: 'Community.Photos.View', params : { id: photo.id+1 }}"
              class="creation-content__link"><i class="icon icon--arrow-next"/></router-link>
          </div>
        </div>
      </div>
      <!-- Meta -->
      <div class="row">
        <div class="col-3"/>
        <div
          class="col-5"
          style="margin-left:0px">
          <span class="float-left">{{ photo.timestamp | date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
import Moment from 'moment'
export default {
  filters: {
    date (value) {
      return Moment.unix(value).format('MMMM DD, YYYY')
    }
  },
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
      photo: null
    }
  },
  async mounted () {
    console.log(this.data)
    if (this.data === undefined) {
      try {
        let photo = await API.get(`camera/${this.id}/author`)
        this.photo = photo.data
        this.loading = false
      } catch (e) {
        this.$router.push({ name: 'Community.Photos.List' })
      }
    } else {
      this.photo = this.data
      this.loading = false
    }
  }
}
</script>
