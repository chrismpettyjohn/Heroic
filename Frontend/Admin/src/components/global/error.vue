<template>
    <div class="jumbotron jumbotron-fluid bg-danger text-light">
      <div class="container">
        <h1 class="display-4">Error Has Occured</h1>
        <p><slot></slot></p>
        <p v-if="!slot" class="lead">Please try again later.</p>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        slot : this.$slots.default
      }
    }
  }
</script>