<template>
<section class="wrapper wrapper--content rooms-wrapper">

	<page-title title="Groups"></page-title>

	<!-- Notices -->
	<loading-notice v-if="loading">Picking our favorite groups from the hotel</loading-notice>

	<!-- Content -->
	<div v-if="!loading && guilds.length > 0" v-for="guild in guilds" class="room-item">
		<router-link :to="{ name : 'user.community.groups.item', params: { id : guild.id }}">
			<div class="habbo-imager room__owner--user left">
				<img src="https://www.habbo.com/habbo-imaging/badge/b06134s01124s39103s39114s3906552e6a1584f9303ee47282c978c7679cc.gif" class="imager">
			</div>
		</router-link>
		<router-link :to="{ name : 'user.community.groups.item', params: { id : guild.id }}">
			<h2 class="room-item__title">{{ guild.name }}</h2>
		</router-link>
		<p class="room-item__description"><b>{{ guild.members.length }}</b> members & Owned by <b>{{ guild.owner.username }}</b></p>
	</div>

  <!-- No Groups Made -->
  <div v-if="!loading && guilds.length===0" class="center">
    <h1>No Groups Made</h1>
    <p>Our users must not like eachother enough to gang up yet..</p>
    <img src="/img/groups.png">
  </div>
</section>
</template>

<style scoped>
.left {
  height: 40px;
  left: 40px;
  top: 40px;
  position: absolute;
  width: 40px;
}

.room__owner--user:before {
  top: -40px;
  width: 60px;
  height: 60px;
}

.imager {
  position: absolute;
  top: -28px;
  left: 25px;
}
</style>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data: function() {
    return {
      guilds: [],
      loading: true
    };
  },
  mounted: function() {
    HTTP.get("guild").then(guilds => {
      this.guilds = guilds.data;
      this.loading = false;
    });
  }
};
</script>
