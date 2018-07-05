<template>
<div class="forum">
	<div class="header">
		<h1>Hotel Forums</h1>
		<p>Speak your mind, stay up to date and make plans to conquer the world!</p>
	</div>
	<div class="sidebar">
		<h3>Navigation</h3>
		<div class="habbo-card stats">
			<div class="card">
				<img class="avatar" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${user.look}&headonly=1`">
				<div class="meta">
					<h3 class="username">{{ user.username }}</h3>
					<dl>
						<dt>Messages:</dt>
						<dd>0</dd>
						<dt>Likes:</dt>
						<dd>0</dd>
					</dl>
				</div>
			</div>
		</div>
		<h5>Quick Menu</h5>
		<router-link :to="{ name : 'user.forum.dashboard' }" class="link">
			<p>Home</p>
		</router-link>
		<a class="link">
			<p @click="searchModal=true">Search</p>
			<search-modal v-if="searchModal" @close="searchModal = false"></search-modal>
		</a>
		<div class="link">
			<p @click="notifyModal=true">Notifications</p>
			<notify-modal v-if="notifyModal" @close="notifyModal = false"></notify-modal>
		</div>
		<div v-if="this.$route.meta.topic">
			<h5>Post Actions</h5>
			<div class="link">
				<p @click="replyModal=true">Reply To Topic</p>
				<reply-modal :key="$route.fullPath" :topic="$route.params.id" v-if="replyModal" @close="replyModal = false" @replyPosted="refreshView()"></reply-modal>
			</div>
			<div class="link">
				<p>Staff Actions</p>
			</div>
		</div>
		<div v-if="this.$route.meta.section">
			<h5>Section Actions</h5>
			<router-link :to="{ name : 'user.forum.post.create', params : { section : this.$route.params.id }}" class="link">
				<p>Create New Topic</p>
			</router-link>
		</div>
	</div>
	<div class="view">
		<router-view :key="count"></router-view>
	</div>
</div>
</template>

<script>
import Reply from "./modals/reply";
import Search from "./modals/search";
import Notifications from "./modals/notifications";
export default {
  components: {
    "reply-modal": Reply,
    "search-modal": Search,
    "notify-modal": Notifications
  },
  data: function() {
    return {
			count : 0,
      replyModal: false,
      searchModal: false,
      notifyModal: false,
      user: window.localStorage.getObject('user')
    };
  },
	methods : {
		refreshView() {
			this.count+= 1
		}
	}
};
</script>
