<template>
<div>

	<!-- Page Title -->
	<page-title :title="`${username}'s Profile`"></page-title>
	<!-- Notices -->
	<loading-notice v-if="loading">
		<p>We are fetching {{ username }}'s profile</p>
	</loading-notice>

	<missing-notice v-if="missing">
		<p>We cannot locate {{ username }}'s profile.</p>
	</missing-notice>

	<!-- View -->
	<div v-if="!loading && !missing" class="forum">
		<div class="sidebar">
			<div class="habbo-card stats">
				<div class="card">
					<img class="avatar" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${profile.look}&headonly=1`">
					<div class="meta">
						<h3>{{ username }}</h3>
					</div>
				</div>
			</div>
			<div class="panel gold" style="width:45%;">
				<img src="http://habboo-a.akamaihd.net/c_images/album1584/VipParties3_Top10.gif">
				<p>{{ profile.credits | currency }}</p>
			</div>
			<div class="panel blue" style="width:45%;">
				<img src="http://habboo-a.akamaihd.net/c_images/album1584/GM1.gif">
				<p>{{ profile.points | currency }}</p>
			</div>
			<router-link :to="{ name : 'user.home.profile.home', params : { username : username }}" class="link">
				<p>Home</p>
			</router-link>
			<router-link :to="{ name : 'user.home.profile.guestbook.view', params : { username : username }}" class="link">
				<p>Guestbook</p>
			</router-link>
			<router-link :to="{ name : 'user.home.profile.guestbook.add', params : { username : username }}" class="link">
				<p>Add to Guestbook</p>
			</router-link>
		</div>
		<div class="view">
			<router-view :profile="profile"></router-view>
		</div>
	</div>
</div>
</template>

<script>
import HTTP from "@/app/utilities/http";
export default {
  data() {
    return {
      user: window.localStorage.getObject('user'),
      username: this.$route.params.username,
      profile: {},
      loading: true,
      missing: false,
    };
  },
  mounted: function() {
    this.getUser(this.username);
  },
  methods: {
    getUser: function(username) {
      HTTP.get(`user/${username}`)
        .then(result => {
          this.profile = result.data;
          this.loading = false;
        })
        .catch(error => {
          this.missing = true;
          this.loading = false;
        });
    }
  },
  watch: {
    "$route.fullPath"(yay, old) {
      this.getUser(this.username);
    }
  }
};
</script>
