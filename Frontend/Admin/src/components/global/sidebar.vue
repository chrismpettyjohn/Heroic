<template>
  <nav id="sidebar">
    <div class="sidebar-header d-flex align-items-center">
      <div class="avatar"><img class="img-fluid rounded-circle" src="https://avatar-retro.com/habbo-imaging/avatarimage?figure=hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64&headonly=1"></div>
      <div class="title">
        <h1 class="h5">{{ user.username }}</h1>
        <p></p>
      </div>
    </div>
    <span class="heading">Main</span>
    <ul class="list-unstyled">
      <!-- Dashboard Button -->
      <li><router-link :to="{ name : 'System.Dashboard' }"><i class="fas fa-home"></i>Dashboard</router-link></li>
      <!-- Site Dropdown -->
      <li @click="trigger('website')">
        <a><i class="fas fa-sitemap"></i> Website</a>
        <ul v-show="dropdown=='website'" class="list-unstyled">
          <li><router-link :to="{ name : 'Site.Settings' }">Settings</router-link></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdown : null
    }
  },
  props : ['user'],
  methods: {
    trigger(who) {
      if (this.dropdown==who) {
        this.dropdown = false
      } else {
        this.dropdown = who
      }
    }
  }
}
</script>