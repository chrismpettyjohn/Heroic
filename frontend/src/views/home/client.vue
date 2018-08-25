<template>
  <page-title>Client</page-title>
</template>

<script>
import Session from '@/app/storage/session'
export default {
  data () {
    return {
      client: Session.getters.client
    }
  },
  methods: {
    toggle () {
      Session.dispatch('client', !this.client)
    }
  },
  mounted () {
    this.toggle()
  }
}
</script>
