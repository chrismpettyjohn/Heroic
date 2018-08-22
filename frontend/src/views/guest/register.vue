<template>
  <div>
    <loading
      v-if="state.loading"
      class="login-area">We are creating your account.</loading>
    <div
      v-if="!state.loading"
      class="login-area">
      <h1>User Registration</h1>
      <p>Nice to see a new face around these parts!</p>
      <form @submit.prevent="register()">
        <div class="login_group">
          <label>Username</label>
          <input
            v-model="user.username"
            :class="{'login_error': state.error==='username'}"
            class="login_field">
        </div>
        <div class="login_group">
          <label>Email</label>
          <input
            v-model="user.mail"
            :class="{'login_error': state.error==='email'}"
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
            :to="{ name: 'Guest.Login' }"
            class="login_link">Or Login...</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

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
    async register () {
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
        this.state.loading = false
        console.log(e.response.data.message)
        this.state.error = e.response.data.message
      }
    }
  }
}
</script>
