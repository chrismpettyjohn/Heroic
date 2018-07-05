<template>
	<div class="login-page">
		<div class="container d-flex align-items-center">
			<div class="form-holder has-shadow">
				<div class="row">
					<!-- Logo & Information Panel-->
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
								<h1>Unauthorized Activity</h1>
								<p>You are not able to perform this task.</p>                
                <p v-if="user"> Please go back to the <router-link :to="{ name : 'System.Dashboard'}">dashboard</router-link>.</p>
                <p v-if="!user"> Please <router-link :to="{ name : 'System.Session.Login'}">login</router-link> and try again.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        user : localStorage.getObject('user').username
      }
    }
  }
</script>