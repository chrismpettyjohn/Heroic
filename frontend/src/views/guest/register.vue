<template>
  <div class="row wrapper">
    <div class="col-2"/>
    <div class="col-8 login-container">
      <div class="row">
        <div class="col-5">
          <form
            v-if="!state.loading"
            class="half"
            @submit.prevent="login">
            <fieldset
              v-if="state.error"
              class="form__fieldset">
              <div class="error">{{ state.error }}</div>
            </fieldset>
            <fieldset class="form__fieldset">
              <h3 class="shop-footer__title">New Account</h3>
              <p>Enjoy your stay!</p>
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
                  v-model="user.mail"
                  class="form__input login-form__input"
                  placeholder="Email">
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
                type="submit">Enter Hotel</button>
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
  .error {
    background: #b71c1c;
    width: 100%;
    padding: 1.5%;
    border-radius: 2px;
    color: white;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
  }
</style>

<script>
import API from '@/app/api'
import Session from '@/app/storage/session'
export default {
  data () {
    return {
      state: {
        loading: false,
        error: false
      },
      user: {
        username: '',
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        // Change Loading State
        this.state.loading = true
        // Create user
        await API.post('user', { user: this.user })
        // Modify User
        delete this.user.mail
        // Sign In
        await Session.dispatch('start', this.user)
        // Redirect
        this.$router.push({ name: 'Home.Me' })
      } catch (e) {
        console.log('LOL: ', e.response.data)
        this.state.loading = false
        this.state.error = e.response.data
      }
    }
  }
}
</script>
