<template>
  <div>
    <img
      :src="`${imager}?figure=${look}&headonly=${headonly}&${query}`"
      class="imager">
  </div>
</template>

<script>
export default {
  props: {
    look: {
      type: String,
      required: false,
      default: null
    },
    headonly: {
      type: Number,
      required: false,
      default: 0
    },
    query: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      imager: 'https://www.habbo.com/habbo-imaging/avatarimage'
    }
  }
}
</script>
