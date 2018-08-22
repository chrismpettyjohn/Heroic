<template>
  <div class="row wrapper">
    <div class="col-2"/>
    <div class="col-8 login-container">
      <div class="row">
        <div class="col-5">
          <form
            class="half"
            @submit.prevent="login">
            <fieldset class="form__fieldset">
              <h3 class="shop-footer__title">Welcome Back</h3>
              <p>There are <b>0</b> user(s) online now</p>
            </fieldset>
            <fieldset class="form__fieldset">
              <div class="form__field">
                <input
                  v-model="user.username"
                  class="form__input login-form__input"
                  placeholder="Username">
              </div>
            </fieldset>
            <fieldset class="form__fieldset">
              <div class="form__field">
                <input
                  v-model="user.password"
                  class="form__input login-form__input"
                  placeholder="Password"
                  type="password">
              </div>
            </fieldset>
            <fieldset class="form__fieldset">
              <button
                class="login-form__button"
                type="submit">Let's go!</button>
            </fieldset>
            <fieldset class="form__fieldset full-width">
              <router-link
                :to="{ name : 'Guest.Register' }"
                class="profile-modal__link">Join Now For Free</router-link>
            </fieldset>
          </form>
        </div>
        <div class="col-lg-2"/>
        <div class="col-4">
          <img
            class="margin-top"
            src="https://d1u5p3l4wpay3k.cloudfront.net/habbo_gamepedia/thumb/3/38/Green_Room.png/306px-Green_Room.png?version=389a78f5cb0840ce302963175c2dd920">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    margin-top: 7.5%;
  }
  .login-container {
    background-color: #103960;
    border-radius: 3px;
    padding: 24px 12px;
  }
  .profile-modal__link:before {
    background:none;
  }
  .margin-top {
    margin-top: 20%;
  }
</style>

<script>
import Session from '@/app/storage/session'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await Session.dispatch('start', this.user)
        this.$router.push({ name: 'Home.Me' })
      } catch (e) {
        alert('Error not coded')
      }
    }
  }
}
</script>
