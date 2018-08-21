<template>
	<div class="app">

		<div v-if="ready" class="app">
			<div class="content" :key="$route.path">
				<!-- Authenticated -->
				<div v-if="user">
					<heroic-header/>
					<main class="wrapper wrapper--content" style="height:100%;">
						<router-view/>
					</main>
				</div>
				<!-- Not Authenticated -->
				<router-view v-if="!user"/>
			</div>
		</div>

		<div v-if="!ready" id="app">
			<div class="container row" style="margin-top:10%;">
				<div class="col-4"></div>
				<div class="col-4">
					<loading>We are preparing your experience</loading>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
.app {
	position: relative;
	height: 100%;
}
.content {
	min-height: 100%;
}
main {
	min-height:100%;
}
</style>

<script>
import Footer from '@/components/footer'
import Session from '@/app/storage/session'
import Header from '@/components/header/base'
import Settings from '@/app/storage/settings'
export default {
  async created () {
    // Prepare System
    await Settings.dispatch('init')
    // Prepare Session
    await Session.dispatch('init')
    // Force Redirect (Router is dumb)
    //this.$router.push({ name: 'Home.Me' })
    // Change State
    this.ready = true
  },
	  components: {
	  	'HeroicHeader': Header,
	  	'HeroicFooter': Footer
	  },
	  computed: {
	  	user () {
	  		return Session.getters.active
	  	}
	  },
	  data () {
	  	return {
	  		ready: false
	  	}
	  }
}
</script>
