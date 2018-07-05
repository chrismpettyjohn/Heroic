<template>
<div>
	<h3>Guestbook</h3>
	<div v-if="profile.guestbook.length == 0">
		<p>There are no posts on this users profile.</p>
	</div>
	<div v-if="profile.guestbook.length > 0">
		<div v-for="post in profile.guestbook" class="post">
			<div class="post-header">
				<div class="user">
						<router-link :to="{ name : 'user.home.profile.home', params : { username : post.author.username }}" class="avatar">
							<img :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${post.author.look}&direction=2&head_direction=2&action=,crr=6`">
						</router-link>
				</div>
				<div class="meta">
					<router-link :to="{ name : 'user.home.profile.home', params : { username : post.author.username }}">
						<h1>{{ post.author.username }}</h1>
					</router-link>
					<p>{{post.created_at | formatDate }}</p>
				</div>
			</div>
			<div class="post-content">
				<p>{{ post.content }}</p>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
.post {
  width: 45%;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  margin-right: 2%;
}

.post-content {
  height: 150px;
  overflow: hidden;
}
</style>

<script>
export default {
  created: function() {
    this.profile.guestbook = this.profile.guestbook.reverse();
  },
  props: ["profile"]
};
</script>
