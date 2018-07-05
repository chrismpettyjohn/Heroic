<template>
<div>

	<page-title title="Rooms"></page-title>

	<!-- Notices -->
	<loading-notice v-if="loading">We are fetching the most popular rooms.</loading-notice>

	<!-- Content -->
	<section v-if="!loading" class="wrapper wrapper--content rooms-wrapper">
		<div v-if="rooms.length > 0" v-for="room in rooms" class="room-item">
			<router-link :to="{ name : 'user.community.rooms.item', params: { id : room.id }}">
				<div class="room-item__thumbnail"></div>
			</router-link>
			<router-link :to="{ name : 'user.community.rooms.item', params: { id : room.id }}">
				<h2 class="room-item__title">{{ room.name }}</h2>
			</router-link>
			<p class="room-item__description"></p>
			<div>
				<router-link :to="{ name : 'user.home.profile', params : { username : room.owner.username }}" class="avatar">
					<div class="habbo-imager room__owner--user">
						<imager :look="room.owner.look" headonly="true"></imager>
					</div>
					<h6 class="avatar__title">{{ room.owner.username }}</h6>
				</router-link>
			</div>
		</div>
				<!-- Show if no photos have been posted -->
		<div v-if="rooms.length===0" class="center">
			<h1>Nothing to see here</h1>
			<p>Our hotel budget is so low, we haven't added any rooms yet!?</p>
			<img src="/img/room.png">
		</div>
	</section>
</div>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data: function() {
    return {
      rooms: [],
      loading: true
    };
  },
  created: function() {
    HTTP.get("room").then(rooms => {
      this.rooms = rooms.data;
      this.loading = false;
    });
  }
};
</script>
