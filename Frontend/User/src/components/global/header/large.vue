<template>
<div>
	<div class="habbo-header-large header__top sticky-header sticky-header--top">
		<div class="wrapper">
			<div class="header__top__content" style="margin-top:15px;">
				<div>
					<div class="header__login-form">
						<form @click="error = null" @submit.prevent="login" class="login-form__form" id="loginForm">
							<fieldset class="form__fieldset login-form__fieldset">
								<div class="form__field">
									<input v-model="user.username" :class="{ 'ng-invalid': error==='username' }" class="form__input login-form__input" placeholder="Username">
								</div>
							</fieldset>
							<fieldset class="form__fieldset login-form__fieldset">
								<div class="form__field">
									<input v-model="user.password" :class="{ 'ng-invalid': error==='password' }" class="form__input login-form__input" placeholder="Password" type="password">
								</div>
							</fieldset><button class="login-form__button" type="submit">Let's go!</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header__content">
		<div class="register-banner__hotel"></div>
		<div class="register-banner__wrapper">
			<div class="register-banner__register">
				<h1 class="register-banner__logo">Habbo</h1>
				<h2 class="register-banner__title">Make friends &amp; chat in a virtual world of amazement</h2>
				<button @click="modals.register = true" class="register-banner__button">Join for free!</button>
				<register v-if="modals.register" @close="modals.register = false"></register>
			</div>
		</div>
	</div>
	<header class="header__wrapper wrapper">
		<a class="header__habbo__logo" href="/">
			<h1 class="header__habbo__name" id="ga-linkid-habbo-large">Habbo</h1></a>
	</header>
	<heroic-navigation></heroic-navigation>
</div>
</template>

<script>
import Session from '@/app/session'
import Register from "@/components/views/guest/register"
export default {
	data() {
		return {
			user : {
				username : null,
				password : null
			},
			modals : {
				register : false
			},
			error: null,
		};
	},
	components : {
		'register' : Register
	},
	methods: {
		login : async function () {
			try {
				await Session.create(this.user)
				this.$router.push({ name : 'user.home.me' })
			} catch (error) {
				this.error = error
			}
		}
	}
};
</script>
