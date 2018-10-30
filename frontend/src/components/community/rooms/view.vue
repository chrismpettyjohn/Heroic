<template>
  <heroic-container title="Viewing Room" :loading="loading">
    <div class="heroic-room-view">
      o u want to look at this room huh?  fuck up
    </div>
  </heroic-container>
</template>

<script>
import { API } from '../../../app'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: 0
    }
  },
  data () {
    return {
      loading: false,
      room: null
    }
  },
  mounted: async function () {
    try {
      this.loading = true
      let room = await API.get(`room/${this.id}/owner`)
      this.room = room.data
      this.loading = false
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
</script>
