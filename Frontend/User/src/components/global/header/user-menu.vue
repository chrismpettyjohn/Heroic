<template>
<div class="user-menu">
	<div class="user-menu__header">
		<a class="user-menu__toggle" @click="toggle" v-click-off="toggleOff">
			<div class="user-menu__name__wrapper">
				<div class="user-menu__name" :class="{ 'user-menu__name--open': status}">
					{{ user.username }}
				</div>
			</div>
			<div class="habbo-imager user-menu__avatar">
				<img :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${user.look}&headonly=1`">
			</div>
		</a>
	</div>
	<ul class="user-menu__list" v-show="status">
		<li class="user-menu__item">
			<router-link :to="{ name : 'user.home.profile.home', params : { username : user.username }}" class="user-menu__link user-menu__link--profile">My profile</router-link>
		</li>
		<li class="user-menu__item">
			<router-link :to="{ name : 'user.logout' }" class="user-menu__link user-menu__link--logout">Logout</router-link>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	data() {
		return {
			status : false
		}
	},
	methods: {
		toggle: function () {
			this.status = !this.status;
		},
		toggleOff: function () {
			if (this.status) {
				this.status = !this.status;
			}
		}
	},
	props : ["user"]
};
</script>
