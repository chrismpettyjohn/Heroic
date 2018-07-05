<template>
	<modal title="Reply To Topic" @close="$emit('close')">
		<!-- Loading -->
		<div v-if="loading">
			<h5>Saving Changes</h5>
			<img src="/img/habbos_jumping.gif">
		</div>

		<!-- Messages -->
		<div v-if="success && !loading" style="text-align:left;">
			<h3>Reply Posted</h3>
			<p style="margin-top:-15px;">Your reply can now be seen to the world!</p>
		</div>
		<div v-if="error" style="text-align:left;">
			<h3>Error:</h3>
			<p style="margin-top:-15px;">Failed to submit a reply to this topic.</p>
		</div>
		<!-- Form -->
		<form v-if="!error && !success && !loading" @submit.prevent="postForm" class="form">
			<textarea v-model="content" class="form__input" placeholder="What do you want to say?" rows="7"> </textarea>
			<input class="form__submit form__submit--inline " type="submit" value="Post">
		</form>
	</modal>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data: function() {
    return {
      content: "",
      error: false,
      success: false,
      loading: false
    };
  },
  props: ["topic"],
  methods: {
    postForm: function() {
      this.loading = true;
      HTTP.post("forum/post", {
				topic_id : this.topic,
        content: this.content
      })
        .then(() => {
					this.$emit('replyPosted')
					this.$emit('close')
        })
        .catch(() => {
          this.error = true;
          this.loading = false;
        });
    }
  }
};
</script>
