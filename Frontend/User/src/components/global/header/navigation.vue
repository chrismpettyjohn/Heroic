<template>
<div>
	<nav class="navigation">
		<ul class="navigation__menu">
			<li class="navigation__item" v-for="link in links">
				<router-link :to="{ name : link.path }" class="navigation__link" :class="link.class"> {{ link.text }}</router-link>
			</li>
			<li class="navigation__item navigation__item--aside navigation__item--hotel">
				<router-link :to="{ name : 'user.home.client' }" class="hotel-button" id="ga-linkid-hotel">
					<span v-show="user" class="hotel-button__text">Hotel <small>0 Online</small></span>
					<span v-show="!user" class="hotel-button__text"><small>0 Online</small></span>
				</router-link>
			</li>
		</ul>
	</nav>
	<div class="habbo-tabs">
		<ul class="tabs tabs__menu">
			<div v-for="link in links" v-if="link.children!=null&& link.parent.indexOf(route.cut) > -1" style="display: flex; flex-wrap: nowrap;">
				<div class="habbo-tab" v-for="child in link.children">
					<li class="tab">
						<router-link :to="{ name : child.path, params : child.params }" class="tab__link" :class="{ 'tab__link--active' : child.path==route.full || route.full.indexOf(child.path) > -1 || route.full.indexOf(child.active) > -1}">{{ child.text}}</router-link>
					</li>
				</div>
			</div>
		</ul>
	</div>

</div>
</template>

<script>
function cut(route, size) {
	var str = route,
		delimiter = ".",
		start = 0,
		tokens = str.split(delimiter).slice(start);
	tokens.length = size;
	return tokens.join(delimiter);
}
export default {
	props: ["user"],
	data() {
		return {
			route: {
				// Remove everythiing past 2nd dot
				cut: cut(this.$route.name, 2),
				full: this.$route.name
			},
			links: [{
					text: this.user || "Home",
					class: "navigation__link--home",
					path: this.user ? "user.home.me" : "",
					parent: this.user ? "user.home" : "",
					children: [{
							text: "What's New",
							path: "user.home.me"
						},
						{
							text: "Profile",
							path: "user.home.profile.home",
							active: "user.home.profile",
							params: {
								username: this.user ? this.user : null
							}
						}
					]
				},
				{
					text: "Community",
					class: "navigation__link--community",
					path: "user.community.photos",
					parent: "user.community",
					children: [{
							text: "Photos",
							path: "user.community.photos"
						},
						{
							text: "Rooms",
							path: "user.community.rooms"
						},
						{
							text: "Groups",
							path: "user.community.groups"
						},
						{
							text: "News",
							path: "user.community.news.category",
							params: {
								id: "all"
							},
							active: "user.community.news"
						},
						{
							text: "Staff Team",
							path: "user.community.staff"
						}
					]
				},
				{
					text: "Forum",
					class: "navigation__link--playing-habbo",
					path: "user.forum.dashboard",
					parent: "user.forum",
					children: [{
						text: "Hotel Forums",
						path: "user.forum"
					}]
				}
			]
		};
	}
};
</script>
