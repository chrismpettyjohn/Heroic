<template>
  <div class="heroic-container">
    <heroic-title>{{ user.username }}</heroic-title>
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
      <div class="flex flex-row">
        <div class="flex flex-column flex-5 has-padding">
          <h4>Hotel Announcements</h4>
          <div class="alert alert-danger">
            <h3>Help Us With Development</h3>
            <p>We need <b>your help</b> to find bugs, missing furniture or anything out of the ordinary to help better our hotel for the future!  Please submit all reports on the Discord channel.</p>
          </div>
        </div>
        <div class="flex flex-column flex-3 has-padding"/>
        <div class="flex flex-column flex-4 has-padding">
          <div class="heroic-card h-100 no-margin">
            <div class="heroic-card-header">
              <span class="header">Social Media</span>
              <span class="description">Follow us to get updates in real time!</span>
            </div>
            <div class="heroic-card-content flex">
              <a href="https://discord.gg/zeqjWqU" target="_blank" class="social-site">
                <i class="fab fa-discord"/> <p>Discord</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert-danger {
  background: #AE0A4A;
  border-color: #990016;
  color: white;
}
.alert h3 {
  font-size: 22px;
}
.alert p {
  font-size: 16px;
}
.social-site {
  color: #7ECAEE;
  font-size: 18px;
  text-transform: uppercase;
}
.social-site p {
  font-size: 20px;
  margin-top: -6px;
  margin-left: 4px;
  display: inline-block;
}
.social-site:hover i {
  color: #011725;
}
.social-site:hover p {
  color: #011725;
}
</style>

<script>
import { Store } from '@/app'
export default {
  data () {
    return {
      user: Store.Session.getters.session.user
    }
  }
}
</script>
