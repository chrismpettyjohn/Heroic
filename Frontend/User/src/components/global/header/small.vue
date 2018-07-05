<template>
<div>
  <div class="habbo-header-small">
    <header class="header__wrapper wrapper">
      <a class="header__habbo__logo" href="/">
        <h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1>
      </a>
      <div class="header__aside" v-if="!user">
      	<router-link :to="{ name : 'guest.login' }" class="header__login__button"><span class="header__login__icon">Login</span></router-link>
      </div>
      <div class="header__aside header__aside--user-menu" v-if="user">
        <user-menu :user="user"></user-menu>
      </div>
    </header>
  </div>
  <heroic-navigation :user="user.username"></heroic-navigation>
</div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>

<script>
export default {
  props: ["user"]
};
</script>
