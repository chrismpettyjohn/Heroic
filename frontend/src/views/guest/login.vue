<template>
  <div>
    <loading
      v-if="state.loading"
      class="login-area">We are logging you in...</loading>
    <div
      v-if="!state.loading"
      class="login-area">
      <h1>Welcome to Habfort</h1>
      <p>A strange place with even stranger people!</p>
      <form @submit.prevent="login()">
        <div class="login_group">
          <label>Username</label>
          <input
            v-model="user.username"
            :class="{'login_error': state.error==='username'}"
            class="login_field">
        </div>
        <div class="login_group">
          <label>Password</label>
          <input
            v-model="user.password"
            :class="{'login_error': state.error==='password'}"
            class="login_field"
            type="password">
        </div>
        <div
          class="login_group"
          style="margin-top:-5%;">
          <button class="login-form__button">Let's go!</button>
        </div>
        <div class="login_group">
          <router-link
            :to="{ name: 'Guest.Register' }"
            class="login_link">Or Join Today...</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Session from '@/app/storage/session'
export default {
  data () {
    return {
      state: {
        loading: false,
        error: null
      },
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        this.loading = false
        await Session.dispatch('start', this.user)
        this.$router.push({ name: 'Home.Me' })
      } catch (e) {
        this.state.error = e.response.data
        this.loading = false
      }
    }
  }
}
</script>
