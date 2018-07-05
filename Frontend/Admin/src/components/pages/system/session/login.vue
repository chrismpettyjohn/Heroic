<template>
	<div class="login-page">
		<div class="container d-flex align-items-center">
			<div class="form-holder has-shadow">
				<div class="row">
					<div class="col-lg-6">
						<div class="info d-flex align-items-center">
							<div class="content">
								<div class="logo">
									<h1>HeroicASE</h1>
								</div>
								<p>Powerful retro management</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 bg-white">
						<div class="form d-flex align-items-center">
							<div class="content">
								<form @submit.prevent="login()" v-show="!system.loading && !system.error" class="form-validate">
									<div class="form-group">
										<input v-model="user.username" class="input-material" placeholder="Username" required="" type="text"> 
									</div>
									<div class="form-group">
										<input v-model="user.password" class="input-material" placeholder="Password" required="" type="password"> 
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-info">Login</button>
									</div>
								</form>
								<div v-show="system.loading" v-html="system.loading"></div>
								<div v-show="system.error" v-html="system.error"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Session from '@/app/session'
export default {
	data() {
		return {
			user : {
				username : null,
				password : null
			},
			system : {
				error : null,
				loading: null,
			}
		}
	},
	methods : {
		login: async function() {
			try {
				// Set Loading 
				this.system.loading = 'Processing your login...'
				// Try Login
			await Session.login(this.user)
				// Welcome Back Message
				this.system.loading = `Welcome back, <b>${this.user.username}</b>`
				// Redrect in 1.5 seconds
				setTimeout(this.redirect, 1500)
			} catch (error) {
				this.system.loading = false
				this.system.error = 'We were unable to validate your login with the credentials provided.'
			}
		},
		redirect() {
			this.$router.push({ name : 'System.Dashboard' })
		}
	}
}
</script>