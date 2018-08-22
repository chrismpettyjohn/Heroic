<template>
  <div>
    <div
      class="modal-backdrop fade in"
      style="z-index: 1040;"/>
    <div
      class="modal fade in"
      role="dialog"
      style="z-index: 1050; display: block;"
      tabindex="-1">
      <div class="modal-dialog">
        <div :class="`modal-content ${size}`">
          <button
            class="modal__close"
            @click="$emit('close')"/>
          <h3 class="modal__title">{{ title }}</h3>
          <slot/>
        </div>
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
    size: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
