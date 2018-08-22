<template>
  <div class="aside aside--box">
    <div class="static-content">
      <div v-if="title">
        <h3 v-if="!icon">{{ title }}</h3>
        <h3 v-if="icon"><img :src="icon"> {{ title }}</h3>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    icons: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
