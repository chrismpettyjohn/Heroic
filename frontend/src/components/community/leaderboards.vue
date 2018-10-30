<template>
  <div class="heroic-container">
    <heroic-title>Online</heroic-title>
    <div class="container-content">
      <div class="flex flex-row">
        <div class="flex flex-column flex-5 has-padding">
          <h4>Most Credits</h4>
          <div v-if="users" class="heroic-photo-list">
            <div v-for="user in users" :key="user.id" class="heroic-card" style="width:300px;">
              <div class="heroic-card-content">
                <ul class="user-list">
                  <li @click="$router.push({ name: 'Home.Profile', params: { username: user.username} })" class="no-box">
                    <heroic-imager as-portrait="1" :figure="user.look" :online="user.online" action="std" gesture="sml" direction="4" head-direction="4" size="m" />
                    <div class="user-info">
                      <span class="username">{{ user.username }}</span>
                      <span class="motto">{{ user.credits }} Credits</span>
                    </div>
                    <div class="user-info-extended"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from '@/app'
export default {
  data () {
    return {
      users: [],
      loading: true
    }
  },
  mounted () {
    API.get('user/leaderboard')
      .then(users => {
        this.users = users.data.credits
        this.loading = false
      })
      .catch(() => {
        this.$router.push({ name: 'Home.Home' })
      })
  }
}
</script>
