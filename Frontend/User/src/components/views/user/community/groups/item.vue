<template>
<div>

	<!-- Page Title -->
	<page-title title="Group"></page-title>
	<!-- Notices -->
	<loading-notice v-if="loading">
		<p>We are trying to fetch this group for you.</p>
	</loading-notice>

	<missing-notice v-if="missing">
		<p>We could not find that group in the hotel!</p>
	</missing-notice>

	<!-- Content -->
	<div v-if="!loading && !missing" class="forum">
		<div class="sidebar">
			<div class="habbo-card stats">
				<div class="card">
					<img class="avatar" src="https://www.habbo.com/habbo-imaging/badge/b02074s93138s32132s612000d2c282761e652c2785e0b14886e41b4.gif">
					<div class="meta">
						<h3>{{ group.name }}</h3>
					</div>
				</div>
			</div>
      <h5>Navigation</h5>
      <div class="link">
				<p>Home</p>
			</div>
		</div>
		<div class="view">
		</div>
	</div>
</div>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      loading: true,
      missing: false,
      group: false
    };
  },
  mounted() {
    HTTP.get(`guild/${this.id}`)
      .then(group => {
        console.log(group);
        this.group = group.data;
        this.loading = false;
      })
      .catch(error => {
        this.missing = true;
        this.loading = false;
      });
  },
  props: ["id"]
};
</script>
