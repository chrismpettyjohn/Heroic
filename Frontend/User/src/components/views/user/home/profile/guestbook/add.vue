<template>
<modal title="Add To Guestbook" @close="redirect">

	<!-- Loading -->
	<div v-if="loading">
		<h5>Saving Changes</h5>
		<img src="/img/habbos_jumping.gif">
	</div>

	<!-- Messages -->
	<div v-if="success && !loading" style="text-align:left;">
		<h3>Post Saved:</h3>
		<p style="margin-top:-15px;">Your post can now be viewed on the users guestbook!</p>
	</div>
	<div v-if="error" style="text-align:left;">
		<h3>Error:</h3>
		<p style="margin-top:-15px;">Failed to save post on user guestbook.</p>
	</div>

	<!-- Form -->
	<form v-if="!error && !success && !loading" @submit.prevent="postForm" class="form">
		<textarea v-model="content" class="form__input" placeholder="What do you want to say?" rows="7"> </textarea>
		<input class="form__submit form__submit--inline " type="submit" value="Post">
	</form>
</modal>
</template>

<script>
import HTTP from "@/app/utilities/http";
export default {
  data: function() {
    return {
      content: "",
      error: false,
      success: false,
      loading: false,
			user : window.localStorage.getObject('user')
    };
  },
  props: ["profile"],
  methods: {
    postForm() {
      this.loading = true;
			HTTP.post("guestbook", { user_id: this.user.id, profile_id: this.profile.id, content: this.content })
        .then(() => {
          this.loading = false;
          this.$router.push({
            name: "user.home.profile.guestbook.view",
            params: { username: this.profile.username }
          });
          this.$emit("close");
        })
        .catch(() => {
          this.error = true;
          this.loading = false;
        });
    },
		redirect() {
			this.$router.push({
				name: "user.home.profile.home",
				params: { username: this.profile.username }
			});	
		}
  }
};
</script>
