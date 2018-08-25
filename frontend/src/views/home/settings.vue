<template>
  <div>
    <!-- Title -->
    <page-title>Settings</page-title>

    <!-- Content -->
    <section class="main" style="margin-top:1.5%;">
      <div class="row">
        <div class="col-12">
          <h2>Account Settings</h2>
          <!--<div class="habbo-avatar-create">
            <div class="avatar-create">
              <div class="avatar-create__text">
                Verify your email now for a special reward
              </div>
              <div class="avatar-create__button__wrapper">
                <button class="avatar-create__button">Send Email</button>
              </div>
            </div>
          </div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <form class="form">
            <fieldset class="form__fieldset">
              <h4>Email Address</h4>
              <div class="form__field">
                <input v-model="user.mail" class="form__input login-form__input">
              </div>
            </fieldset>
            <fieldset class="form__fieldset form__fieldset--box">
              <h4>Password</h4>
              <p>Current</p>
              <div class="form__field">
                <input class="form__input login-form__input">
              </div>
              <p>New</p>
              <div class="form__field">
                <input class="form__input login-form__input">
              </div>
            </fieldset>
            <fieldset class="form__fieldset">
              <button class="form__submit">Update</button>
            </fieldset>
          </form>
        </div>
        <div class="col-2"/>
        <div class="col-6">
          <container title="Need Help?" style="margin-top:5%;">
            <p><b>Why we need your email</b></p>
            <p>Your email address is used to verify your identity incase of a potential breach in your account.</p>
            <p><b>Password management</b></p>
            <p>We require you to submit your current password when updating it to verify you truly wish to change your password.</p>
          </container>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.form {
  width: 100%;
}
</style>

<script>
import Session from '@/app/storage/session'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      user: Session.getters.user
    }
  }
}
</script>
