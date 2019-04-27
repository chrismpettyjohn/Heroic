<template>
  <div class="heroic-container">
    <heroic-title>Maintenance</heroic-title>
    <div class="container-content">
      <center><img src="/images/logo-outline.png"></center>
      <div class="flex flex-row" style="margin-top:4%;">
        <div class="flex flex-column flex-5 has-padding">
          <h4>System Maintenance</h4>
          <p>Our hotel is currently undergoing renovation.  This page will automatically reload when we are finished, feel free to follow our social media for updates.</p>
          <img src="/images/pages/maintenance.gif" style="width:256px;height:224px;">
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
.heroic-container {
  min-height: 93.5%;
}
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
import { API } from '@/app'
export default {
  methods: {
    check () {
      API.get('heroic')
        .then(() => {
          this.$router.go({ name: 'Home.Home' })
        })
        .catch(() => {
          // Darn
        })
    }
  },
  mounted () {
    document.title = 'System Maintenance'
    setInterval(this.check, 10000)
  }
}
</script>
