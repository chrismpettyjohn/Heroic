<template>
  <p>Logged out.</p>
</template>

<script>
export default {
  created: function() {
    window.localStorage.clear()
    this.$router.push("/login");
  }
};
</script>
