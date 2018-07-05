<template>
  <div>
    <div v-show="this.$route.meta.page">
      <navbar :user="user"></navbar>
      <div class="d-flex align-items-stretch">
        <sidebar :user="user"></sidebar>
        <router-view class="page-content"></router-view>
      </div>
    </div>
    <div v-show="!this.$route.meta.page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user : localStorage.getObject('user'),
    }
  }
}
</script>