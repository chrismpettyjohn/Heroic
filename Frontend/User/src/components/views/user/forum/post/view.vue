<template>
	<div>
		<!-- Page Title -->
		<page-title title="Forums"></page-title>
		<!-- Notices -->
		<loading-notice v-if="loading">
			<p>Fetching this forum post for you</p>
		</loading-notice>

		<missing-notice v-if="missing">
			<p>This post does not exist according to our sources.</p>
		</missing-notice>

		<!-- Content -->
		<div v-if="!loading && !missing">
			<div class="post">
				<div class="post-header">
					<div class="user">
						<div class="avatar">
							<img :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${topic.author.look}&direction=2&head_direction=2&action=,crr=6`">
						</div>
						<h4>{{ topic.author.username }}</h4>
					</div>
					<div class="meta">
						<h1>{{ topic.title }}</h1>
						<p>{{ topic.created_at }}</p>
					</div>
				</div>
				<div class="post-content" v-html="topic.content"></div>
			</div>
			<h3>Replies</h3>
			<div v-if="!topic.replies || topic.replies.length ==0 ">
				<p>Nobody has replied to this topic.</p>
				</div>
			<div v-if="topic.replies.length > 0" v-for="reply in topic.replies" class="reply">
				<div class="user">
					<div class="avatar">
						<img :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${reply.author.look}&direction=2&head_direction=2&action=,drk=6`">
					</div>
					<h4>{{ reply.author.username }}</h4>
				</div>
				<div class="content">
					<span>{{ reply.created_at }}</span>
					<p>{{ reply.content }}</p>
				</div>
			</div>
		</div>
</div>
</template>

<script>
import Moment from "moment";
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      topic: {},
      missing: false,
      loading: true
    };
  },
  mounted() {
    HTTP.get(`/forum/post/${this.id}`)
      .then(result => {
        let topic = result.data;
        let replies = [];
        // Format date
        topic.created_at = Moment(this.topic.created_at).format(
          "MMMM Do (hh:mA)"
        );
        // Format replies
        topic.replies.forEach(reply => {
          reply.created_at = Moment(reply.created_at).format("MMMM Do (hh:mA)");
          replies.push(reply);
        });
        // Move replies to topic
        topic.replies = replies;
        // Save to this
        this.topic = topic;
        // Done, Let's roll
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
