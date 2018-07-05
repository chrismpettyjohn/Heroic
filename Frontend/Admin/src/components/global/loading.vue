<template>
  <section class="no-padding-top no-padding-bottom">
    <h1>Loading Content</h1>
    <slot></slot>
    <p v-if="!slot">Please stand by as we load the content for this page.</p>
  </section>
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