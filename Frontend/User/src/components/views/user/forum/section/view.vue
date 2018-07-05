<template>
	<div>
		<!-- Page Title -->
		<page-title title="Forums"></page-title>
		<!-- Notices -->
		<loading-notice v-if="loading">
			<p>Fetching available forum sections for you</p>
		</loading-notice>

		<missing-notice v-if="missing">
			<p>This section either doesn't exist or is having problems.</p>
		</missing-notice>

		<!-- Content -->
		<div v-if="!loading && !missing">
			<h2 class="section_header">
		    <img src="http://habboo-a.akamaihd.net/c_images/album1584/ADM.gif" style="margin-bottom:-5px;">
		    {{ section.title }}
		  </h2>
			<section class="habbo-products">
				<h3 class="inventory__section__title">Popular Topics</h3>
				<router-link v-for="post in section.posts" :to="{ name : 'user.forum.post.view', params : { section: section.id, id : post.id }}" class="topic">
					<div class="wrapper" @mouseover="post.hover = true" @mouseleave="post.hover = false">
						<div class="avatar">
							<img v-if="!post.hover" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${post.author.look}&direction=2&head_direction=2`">
							<img v-if="post.hover" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${post.author.look}&direction=2&head_direction=2&action=,crr=6`">
						</div>
						<div class="meta">
							<h4>{{ post.title }} <small style="color:#73C3EB;font-size:0.6em;float:right;margin-top:5px;">{{ post.created_at }}</small></h4>
							<span>Posted by <b>{{ post.author.username }}</b></span>
						</div>
					</div>
				</router-link>
			</section>
		</div>
	</div>
</template>

<script>
import Moment from "moment";
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      section: {},
      missing: false,
      loading: true
    };
  },
  mounted() {
    HTTP.get(`/forum/section/${this.id}`)
      .then(result => {
        let section = result.data;
        // Format post data
        section.posts.forEach(post => {
          // June 8 (1:17PM)
          post.created_at = Moment(post.created_at).format("MMM Do (hh:mA)");
          post.hover = false;
        });
        // Save
        this.section = section;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.missing = true;
      });
  },
  props: ["id"]
};
</script>
