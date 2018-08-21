<template>
	<div class="row">
		<!-- Page Title -->
		<page-title>Chris</page-title>

		<!-- Content -->
		<div class="col-8">
			<h1>Latest News</h1>
			<slider/>
		</div>
		<div class="col-4">
			<h1>Welcome Back</h1>
			<!-- Hot Campaigns -->
			<container icon="http://habboemotion.com/resources/images/icons/news_icon_00.gif" title="Campaigns">
				<div class="row campaign">
					<div class="col-2">
						<img src="http://habboemotion.com/resources/images/icons/HD_hc.gif">
					</div>
					<div class="col-1"></div>
					<div class="col-8">
						<h5>Buy Habbo Club</h5>
						<p>Head to the shop today and join the best club!</p>
					</div>
				</div>
				<div class="row campaign">
					<div class="col-2">
						<img src="http://habboemotion.com/resources/images/icons/HD_staff.gif">
					</div>
					<div class="col-1"></div>
					<div class="col-8">
						<h5>Staff Apps</h5>
						<p>Do you have what it takes to join the team?</p>
					</div>
				</div>
			</container>
			<!-- Beta Message -->
			<container icon="http://habboemotion.com/resources/images/icons/news_icon_05.gif" title="Beta">
				This hotel is undergoing work and all features may not work.
			</container>
		</div>
	</div>
</template>

<script>
	import Session from '@/app/storage/session'
	import Slider from '@/components/article/slider'
	import Container from '@/components/utility/container'
	export default {
		components: {
			'Container': Container,
		   'Slider': Slider
		 },
		 data () {
		 	return {
		 		user: Session.state.user
		 	}
		 }
	}
</script>
