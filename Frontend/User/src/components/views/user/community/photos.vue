<template>
<section class="wrapper wrapper--content">

	<page-title title="Photos"></page-title>

	<!-- Notices -->
	<loading-notice v-if="loading">Loading the newest photos taken by our users.</loading-notice>

	<!-- Content -->
	<div v-if="!loading" class="columns">
		<!-- Show if Photos are posted -->
		<div v-if="photos.length > 0" v-for="photo in photos" class="habbo-card">
			<div class="card">
				<div class="card__content">
					<a class="card__link">
						<div class="card__image__aligner">
							<img class="card__image card__image--photo" :src="`${photo.url}`">
						</div>
					</a>

					<div class="card__meta">
						<time class="card__date">Posted {{photo.timestamp}}</time>
					</div>
				</div>
				<div>
					<router-link :to="{ name : 'user.home.profile.home', params : { username : photo.user.username }}" class="avatar">
						<imager :look="photo.user.look" headonly="true"></imager>
						<h6 class="avatar__title">{{ photo.user.username }}</h6>
					</router-link>
				</div>
			</div>
		</div>
		<!-- Show if no photos exist -->
		<div v-if="photos.length===0" class="center">
			<h1>Empty Photo Album</h1>
			<p>Looks like our users just aren't in the picture taking mood.</p>
			<img src="/img/camera.gif">
		</div>
	</div>
</section>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data: function() {
    return {
      photos: [],
      loading: true
    };
  },
  created: function() {
    HTTP.get("camera").then(photos => {
      this.photos = photos.data;
      this.loading = false;
    });
  }
};
</script>
