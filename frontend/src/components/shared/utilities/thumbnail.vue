<template>
  <div>
    <div class="heroic-room-thumbnail" :style="{backgroundImage: `url(${cameraUrl}/thumbnail_${id}.png)`}" />
  </div>
</template>
<script>
import { Store } from '../../../app'

export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      cameraUrl: `https://arcturus.pw/camera/${Store.Settings.getters.settings['license.user']}`
    }
  }
}
</script>
