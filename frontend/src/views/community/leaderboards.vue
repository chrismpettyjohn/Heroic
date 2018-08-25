<template>
  <div>
    <!-- Page Title -->
    <page-title>Top Users</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching the best users</loading>

    <!-- Content -->
    <div v-if="!loading" style="margin-top:1.5%;" class="row">
      <article class="static-content">
        <h1>Top Users</h1>
        <p>These users have worked their way up and made it to the very top!</p>
        <!-- Credits -->
        <h4>Credits</h4>
        <div v-for="user in users.credits" :key="user.id" class="card">
          <router-link :to="{ name: 'Home.Profile', params: { username: user.username }}" class="avatar">
            <imager :look="user.look" :headonly="1" class="imager"/>
            <h6 class="avatar__title">{{ user.username }}</h6>
            <span class="currency">
              <img src="/img/icons/credits.png"> {{ user.credits }}
            </span>
          </router-link>
        </div>
        <hr>
        <!-- Points -->
        <h4>Points</h4>
        <div v-for="user in users.points" :key="user.id" class="card">
          <router-link :to="{ name: 'Home.Profile', params: { username: user.username }}" class="avatar">
            <imager :look="user.look" :headonly="1" class="imager"/>
            <h6 class="avatar__title">{{ user.username }}</h6>
            <span class="currency">
              <img src="/img/icons/points.png"> {{ user.points }}
            </span>
          </router-link>
        </div>
        <hr>
        <!-- Online -->
        <h4>Online</h4>
        <div v-for="user in users.online" :key="user.id" class="card">
          <router-link :to="{ name: 'Home.Profile', params: { username: user.username }}" class="avatar">
            <imager :look="user.look" :headonly="1" class="imager"/>
            <h6 class="avatar__title">{{ user.username }}</h6>
            <span class="currency">
              <img src="http://habboemotion.com/resources/images/icons/v20_6.gif"> {{ time(user.info.online_time) }} min
            </span>
          </router-link>
        </div>
        <hr>
      </article>
    </div>

  </div>
</template>

<style scoped>
  article p {
    margin-top: -1.5%;
  }
  .card {
    display: inline-block;
    width: 250px;
    height: 70px;
    margin: 0px;
    margin-right: 1.5%;
    margin-top: .5%;
    position: relative;
  }
  .card:hover {
    background: #05353B;
    border-color: #216A7B;
  }
  .currency {
    position:absolute;
    right:5%;
  }
</style>

<script>
import API from '@/app/api'
import Settings from '@/app/storage/settings'
export default {
  data () {
    return {
      loading: true,
      users: null,
      settings: Settings.getters.site
    }
  },
  async mounted () {
    try {
      let users = await API.get('user/leaderboard')
      this.users = users.data
      this.loading = false
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  },
  methods: {
    time (value) {
      return Math.floor(value / 60)
    }
  }
}
</script>
