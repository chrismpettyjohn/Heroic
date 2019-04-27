<template>
  <heroic-container title="Staff" :loading="loading" :header="header">
    <div v-if="ranks" class="heroic-staff-list">
      <div v-for="rank in ranks" :key="rank.id">
        <div class="heroic-card no-margin">
          <div class="heroic-card-header">
            <span class="header">{{ rank.rank_name }}</span>
            <span class="description">{{ rank.rank_desc }}</span>
          </div>
          <div class="heroic-card-content">
            <ul class="user-list" v-if="rank.users">
              <li v-for="user in rank.users" :key="user.id" @click="$router.push({ name: 'Home.Profile', params: { username: user.username} })" class="no-bg no-box">
                <heroic-imager as-portrait="1" :figure="user.look" :online="user.online" action="std" gesture="sml" direction="4" head-direction="4" size="m" />
                <div class="user-info">
                  <span class="username">{{ user.username }}</span>
                  <span class="motto">{{ user.motto }}</span>
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
import { API } from '../../../app'

export default {
  data () {
    return {
      loading: false,
      ranks: null,
      header: {
        hasHeader: true,
        title: 'Our Team',
        description: 'These users help keep the place running and make sure our users are safe!'
      }
    }
  },
  mounted: async function () {
    try {
      this.loading = true
      let ranks = await API.get('permission/staff/users')
      this.ranks = ranks.data
      this.loading = false
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
</script>
