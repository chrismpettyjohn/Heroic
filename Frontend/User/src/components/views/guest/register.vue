<template>
  <modal title="Join For Free" @close="$emit('close')">

    <!-- Loading -->
    <div v-if="stop=='loading'" style="text-align:center;">
      <h5>Saving Changes</h5>
      <img src="/img/habbos_jumping.gif">
    </div>

    <!-- Messages -->
    <div v-if="stop=='error'" style="text-align:left;">
      <h3>Error:</h3>
      <p style="margin-top:-15px;">Failed to register new account.</p>
      <img src="/img/frank-tf.png">
    </div>

    <!-- Content -->
    <form v-if="stop=='form' || !stop" @submit.prevent="registerUser" class="form">
      <fieldset class="form__padding">
        <label>Username</label>
        <div class="form__field">
          <input v-model="user.username" :change="checkUsername()" :class="{ 'ng-invalid': errors.username }" class="form__input" type="text">
        </div>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">
        <label>Password</label>
     	  <div class="form__field">
      		<input v-model="user.password.one" class="form__input habbo-password-field" type="password">
          <i class="password-toggle-mask__icon"></i>
      	</div>
      </fieldset>
      <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-bottom">
        <label>Password Again</label>
        <div class="form__field">
          <input v-model="user.password.two" class="form__input habbo-password-field" type="password">
          <i class="password-toggle-mask__icon"></i>
        </div>
      </fieldset>
      <fieldset class="form__padding">
        <label>Email</label>
        <div class="form__field">
          <input v-model="user.mail" :change="checkMail()" :class="{ 'ng-invalid': errors.mail }" class="form__input form__inline" type="email">
        </div>
      </fieldset>
      <fieldset class="form__padding">
        <div class="form__field">
          <input :disabled="stop=='form'" class="form__submit form__submit--inline" value="Register" type="submit">
        </div>
      </fieldset>
    </form>
  </modal>
</template>

<style scoped>
label {
  float: left;
}
.form__submit {
  float: right;
  padding: 0;
  width: 40%;
  margin-top: 0px;
}
</style>

<script>
import JWT from "jwt-decode";
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      user : {
        username : null,
        password : {
          one : null,
          two : null
        },
        mail  : null
      },
      stop : 'form',
      errors : {
        username : false,
        mail     : false
      },
    }
  },
  methods : {
    checkUsername : async function () {
      if (this.user.username!= null) {
        try {
          // Check username
          await HTTP.get(`user/check/username/${this.user.username}`)
          // Return
          this.errors.username = false
        } catch (error) {
          // Username not available
          this.errors.username = true
        }
      }
    },
    checkMail : async function () {
      if (this.user.mail != null) {
        try {
          // Check username
          await HTTP.get(`user/check/mail/${this.user.mail}`)
          // Return
          this.errors.mail = false
          this.stop        = null
        } catch (error) {
          // Username not available
          this.errors.mail = true
        }
      }
    },
    registerUser : async function () {
      try {
        // Set Loading state
        this.stop = 'loading'
        // Define
        let user = {}
        let jwt = null
        // Set
        user = {
          username : this.user.username,
          password : this.user.password.one,
          mail     : this.user.mail
        }
        // Create user
        user = await HTTP.post('user', user)
        // Define
        user = {
          username : this.user.username,
          password : this.user.password.one
        }
        // Create session
        jwt = await HTTP.post('session', user)
        // Unpack JWT
        user = JWT(jwt.data)
        // Set session
        this.$sess.set({
          jwt     : jwt.data,
          session : user.session,
          user    : user.user
        })
        // Reroute
        this.$router.push({ name : 'user.home.me' })
      } catch (error) {
        this.stop = 'error'
      }
    }
  }
}
</script>
