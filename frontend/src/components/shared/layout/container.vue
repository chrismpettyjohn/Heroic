<template>
  <div class="heroic-container" :class="{'flex align-center': loading}">
    <heroic-title>{{ title }}</heroic-title>
    <heroic-loading v-if="loading" />
    <div v-if="!loading">
      <div class="container-header" v-if="header.hasHeader">
        <div class="header-content" v-if="!header.override">
          <h2 v-if="header.title">{{ header.title }}</h2>
          <p v-if="header.description">{{ header.description }}</p>
        </div>
        <div class="header-content" v-if="header.override" v-html="header.overrideContent"/>
      </div>
      <div class="container-content">
        <slot />
      </div>
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
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    header: {
      type: Object,
      required: false,
      default: () => {
        return {
          hasHeader: false,
          title: null,
          description: null,
          override: false,
          overrideContent: null
        }
      }
    }
  }
}
</script>
