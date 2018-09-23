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
          <h3>Important Information</h3>
          <p>HabFort hotel is still an ongoing development and many changes may take place as we perfect things for you, our users.</p>
          <p>We actively encourage you to participate in our friendly Discord server to stay up to date with the latest changes and so we can hear your input.</p>
          <a href="https://discord.gg/VKPY5ru"><img src="/images/icons/discord.png" style="width:200px;"></a>
        </div>
        <div class="flex flex-column flex-2"/>
        <div class="flex flex-column flex-2 has-padding">
          <img src="/images/pages/home.gif" style="max-height:290px;max-width:290px">
        </div>
      </div>
    </div>
  </div>
</template>

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
