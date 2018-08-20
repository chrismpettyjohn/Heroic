<template>
  <div>
    <div class="habbo-header-small">
      <header class="header__wrapper wrapper">
        <a class="header__habbo__logo" href="/">
          <h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1>
        </a>
        <div class="header__aside header__aside--user-menu">
          <user-menu/>
        </div>
      </header>
    </div>
    <navi-menu/>
  </div>
</template>

<script>
import User from './user'
import Navi from './navi'
export default {
  components: {
    'userMenu': User,
    'naviMenu': Navi
  }
}
</script>
