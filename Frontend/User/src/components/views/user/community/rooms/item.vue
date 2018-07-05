<template>
	<div>
		<page-title :title="room.name"></page-title>

		<!-- Notices -->
		<loading-notice v-if="loading">Loading room information.</loading-notice>

		<!-- Content -->
		<section v-if="room && !loading" class="wrapper wrapper--content" style="display:flex;">

			<div class="left">
				<div class="room__thumbnail"></div>
				<router-link :to="{ name : 'user.home.profile', params : { username : room.owner.username }}" class="avatar">
					<div class="habbo-imager room__owner--user">
						<imager :look="room.owner.look" headonly="true"></imager>
					</div>
					<h6 class="avatar__title">{{ room.owner.username }}</h6>
				</router-link>
			</div>

			<div class="room__content">
				<h1 class="room__content__title">
		        {{ room.name }}
		      </h1>
				<div class="room__content__left">
					<ul class="room-info">
						{{ room.description }}
					</ul>
				</div>
			</div>

			<div class="room__content__right">
				<div class="room__details">
					<h3>Room details</h3>
					<dl>
						<dt>Rating</dt>
						<dd>{{ room.score }}</dd>
						<dt>Max users</dt>
						<dd>{{ room.users_max}}</dd>
					</dl>
				</div>
			</div>

		</section>
</div>
</template>

<style scoped>
.left {
  float: left;
  width: 10%;
}

.room__content {
  float: right;
}

.room__thumbnail {
  float: none;
}

.room-info {
  min-width: 500px;
}
</style>

<script>
import HTTP from '@/app/utilities/http'
export default {
  props: ["id"],
  data: function() {
    return {
      room: null,
      loading: true
    };
  },
  mounted: function() {
    HTTP.get(`room/${this.id}`).then(room => {
      this.room = room.data;
      this.loading = false;
    });
  }
};
</script>
