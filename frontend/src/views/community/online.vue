<template>
  <div>
    <!-- Page Title -->
    <page-title>Online</page-title>

    <!-- Loading -->
    <loading v-if="loading">We're finding out who's online!</loading>

    <!-- Content -->
    <div v-if="!loading" style="margin-top:1.5%;" class="row">
      <article>
        <h1>Online Users</h1>
        <p>These users are currently online and exploring with their friends!</p>
      </article>
      <div v-for="user in users" :key="user.id" class="card">
        <router-link :to="{ name: 'Home.Profile', params: { username: user.username }}" class="avatar">
          <imager :look="user.look" :headonly="1" class="imager"/>
          <h6 class="avatar__title">{{ user.username }}</h6>
          <img :src="`${settings['swf.base'].replace('base','')}/images/album1584/ADM.gif`" class="badge">
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  article p {
    margin-top: -1.5%;
  }
  .card {
    margin: 0px;
    position: relative;
  }
  .card:hover {
    background: #05353B;
    border-color: #216A7B;
  }
  .badge {
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
      let users = await API.get('user/online')
      this.users = users.data
      this.loading = false
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  }
}
</script>
