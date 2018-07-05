<template>
  <div class="content">
    <header-small :key="$route.fullPath" :user="user" v-show="$route.name!='user.home.client'"></header-small>
    <jumbotron :key="$route.name"></jumbotron>
    <main class="wrapper wrapper--content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: window.localStorage.getObject('user')
    };
  }
};
</script>
