<template>
<modal title="Submit Forum Post" @close="$emit('close')">

	<!-- Loading -->
	<div v-if="loading" style="text-align:center;">
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
		<p style="margin-top:-15px;">Failed to post new thread at this time.</p>
	</div>

	<!-- Form -->
  <div v-if="!error && !success && !loading">
    <h5>Almost finished,</h5>
    <p>Before you save your post, you need to give it a name!</p>
  	<form @submit.prevent="postForm" class="form">
      <input v-model="title" placeholder="Very cool post" class="form__input" type="text" maxlength="15">
  		<input class="form__submit form__submit--inline" type="submit" value="Post">
  	</form>
  </div>
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
      loading: false,
      title : ""
    };
  },
  methods: {
    postForm: function() {
      this.loading = true;
      HTTP.post('forum/post', {
        title : this.title,
        content : this.content,
        section_id : this.section
      })
        .then (result => {
          this.loading = false;
          this.$router.push({ name : 'user.forum.post.view', params : { section : this.section, id : result.data.id }})
        })
        .catch (error => {
          console.log(error)
          this.loading = false;
          this.error = true
        })
    }
  },
  props : ["content", "section"]
};
</script>
