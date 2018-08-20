<template>
<div>
  <img v-if="headonly" :src="`${imager}?figure=${look}&headonly=1&${query}`" class="imager">
  <img v-if="!headonly" :src="`${imager}?figure=${look}&${query}`" class="imager">
</div>
</template>

<script>
export default {
	  data () {
	    return {
	      imager: 'https://www.habbo.com/habbo-imaging/avatarimage'
	    }
	  },
	  props: ['look', 'headonly', 'query']
}
</script>
