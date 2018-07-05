<template>
<div>
	<!-- Friends -->
	<div v-if="profile.friends.length > 0" class="profile__card__wrapper--friends">
		<section class="profile__card__aligner">
			<div class="profile__card">
				<h2 class="profile__card__title"><span>Friends</span></h2>
				<ul class="item-list--grid">
					<li v-for="friend in profile.friends.slice(0,3)" class="item item--friend">
						<a class="item__content">
							<div class="item__icon">
								<img class="imager" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${friend.user.look}`">
							</div>
							<div class="item__text">
								<h6 class="item__title item__title--single-line">{{ friend.user.username }}</h6>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<!-- Rooms -->
	<div v-if="profile.rooms.length > 0" class="profile__card__wrapper--rooms">
		<section class="profile__card__aligner">
			<div class="profile__card">
				<h2 class="profile__card__title">Rooms</h2>
				<ul class="item-list--grid">
					<li v-for="room in profile.rooms.slice(0,3)" class="item item--room">
						<router-link :to="{ name : 'user.community.rooms.item', params : { id : room.id }}" class="item__content">
							<div class="habbo-room-icon-icon item__icon">
								<div class="room-icon"></div>
							</div>
							<div class="item__text">
								<h6 class="item__title item__title--single-line">{{ room.name }}</h6>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<!-- Badges -->
	<div v-if="profile.badges.length > 0" class="profile__card__wrapper--badges">
		<section class="profile__card__aligner">
			<div class="profile__card">
				<h2 class="profile__card__title">Badges</h2>
				<ul class="item-list--grid">
					<li v-for="badge in profile.badges.slice(0,3)" class="item item--small item--badge">
						<div class="item__content">
							<div class="item__icon">
								<div class="item__icon__aligner">
									<img :src="`https://images.habbo.com/c_images/album1584/${ badge.badge_code }.gif`">
								</div>
							</div>
							<div class="item__text">
								<h6 class="item__title item__title--multi-line">{{ badge.badge_code }}</h6>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<!-- Groups -->
	<div v-if="profile.guilds.length > 0" class="profile__card__wrapper--groups">
		<section class="profile__card__aligner">
			<div class="profile__card">
				<h2 class="profile__card__title">Groups</h2>
				<ul class="item-list--grid">
					<li v-for="group in profile.guilds.slice(0,3)" class="item item--small item--group">
						<router-link :to="{ name : 'user.community.groups.item', params : { id : group.guild_id }}" class="item__content">
							<div class="item__icon">
								<div class="item__icon__aligner">
									<img src="https://www.habbo.com/habbo-imaging/badge/b02074s93138s32132s612000d2c282761e652c2785e0b14886e41b4.gif">
								</div>
							</div>
							<div class="item__text">
								<h6 class="item__title item__title--multi-line">{{ group.guild.name}}</h6>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<!-- Newbie -->
	<div v-if="profile.friends.length == 0 && profile.badges.length == 0 && profile.rooms.length == 0 && profile.guilds.length == 0">
		<h3>Newbie!</h3>
		<p>This player is still a beginner and doesn't have anything to show off :(</p>
	</div>

</div>
</template>

<script>
export default {
  props: ["profile"]
};
</script>
