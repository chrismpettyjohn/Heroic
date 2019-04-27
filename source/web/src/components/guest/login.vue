<template>
  <div class="heroic-guest-login">
    <heroic-title>Login</heroic-title>
    <heroic-loading v-if="loading">Processing</heroic-loading>
    <div class="left-inner" v-if="!loading">
      <h1>Welcome to Habfort</h1>
      <p>A strange place with even stranger people!</p>

      <form @submit.prevent="login()" novalidate>
        <div class="form-group" :class="{'is-invalid': error == 'username', 'is-valid': submitted && error != 'username'}">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
          <div class="invalid-feedback">Invalid Username</div>
        </div>
        <div class="form-group" :class="{'is-invalid': error == 'password'}">
          <label>Password</label>
          <input type="password" class="form-control" v-model="user.password">
          <div class="invalid-feedback">Invalid Password</div>
        </div>
        <button type="submit" class="btn btn-green w-100" :disabled="user.username === '' || user.password === '' || submitted === true">Let's go!</button>
      </form>
      <router-link :to="{ name: 'Guest.Register' }" class="link">Or Join Today...</router-link>
    </div>
  </div>
</template>

<script>
import { Store } from '../../app'

export default {
  data () {
    return {
      loading: false,
      submitted: false,
      error: null,
      user: {
        username: '',
        password: ''
      }
    }
  },
  created: function () {
    this.$watch('user', (newV, oldV) => {
      this.submitted = false
      this.error = null
    }, {
      deep: true
    })
  },
  methods: {
    async login () {
      try {
        this.loading = true
        this.submitted = true

        await Store.Session.dispatch('login', this.user)

        this.$router.push({ name: 'Home.Home' })
      } catch (e) {
        this.loading = false
        this.submitted = true
        this.error = e.response.data.message
      }
    }
  }
}
</script>
