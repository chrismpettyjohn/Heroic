<template>
	<div>
	<!-- Page Title -->
	<page-title title="Forums"></page-title>
	<!-- Notices -->
	<loading-notice v-if="loading">
		<p>Fetching available forum sections for you</p>
	</loading-notice>

	<missing-notice v-if="missing">
		<p>Something happened and the forums could not be loaded.</p>
	</missing-notice>

	<!-- Content -->
	<div v-if="!loading && !missing" class="forum">
		<h3>Browse By Section</h3>
		<router-link v-for="section in sections" :to="{ name : 'user.forum.section.view', params : { id : section.id }}" class="section">
			<div class="wrapper">
				<img class="image" :src="`/img/forum/${section.image}.png`">
				<div class="meta">
					<h4>{{ section.title }}</h4>
					<p>{{ section.description }}</p>
				</div>
			</div>
		</router-link>
		<footer class="shop-footer">
			<section class="main shop-footer__main">
				<h3 class="shop-footer__title">Please remember</h3>
				<p class="shop-footer__text">Anything you post here is available publicly and can be viewed by anyone.</p>
				<p class="shop-footer__text"><b>Do not</b> share personal details, pictures or anything explicit otherwise penalities may occcur. This is done for your own safety!</p>
			</section>
			<aside class="aside shop-footer__aside">
				<img src="/img/frank-carpet.png">
			</aside>
		</footer>
	</div>
</div>
</template>

<script>
import HTTP from "@/app/utilities/http";
export default {
  data() {
    return {
      sections: [],
      missing: false,
      loading: true
    };
  },
  mounted() {
    HTTP.get("forum/section")
      .then(sections => {
        this.sections = sections.data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.missing = true;
      });
  }
};
</script>
