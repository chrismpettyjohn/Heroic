<template>
  <div class="heroic-container" :class="{'flex align-center': loading}">
    <heroic-title v-if="!loading">{{ user.username }}</heroic-title>
    <heroic-loading v-if="loading" />
    <div v-if="!loading">
      <div class="container-header">
        <div class="header-content">
          <div class="profile-info">
            <heroic-imager as-avatar="1" :figure="user.look" action="std" gesture="sml" direction="2" head-direction="3" size="l" />
            <div class="user-info">
              <h2>{{ user.username }}</h2>
              <p>{{ user.motto }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-content">
        <div class="heroic-profile">
          <div class="left">
            <div class="left-container">
              <h4>Oops</h4>
              <p>We promise to add something cool here!</p>
            </div>
          </div>
          <div class="right">
            <div class="right-container"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from '../../app'

export default {
  props: {
    username: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      loading: true,
      user: null
    }
  },
  mounted: async function () {
    try {
      let user = await API.get(`user/${this.username}`)
      this.user = user.data
      this.loading = false
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
</script>
