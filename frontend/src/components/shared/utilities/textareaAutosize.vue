<template>
  <textarea @focus="resize" v-model="val" :style="computedStyles"/>
</template>
<script>
export default {
  name: 'TextareaAutosize',
  created () {
    this.updateVal()
  },
  mounted () {
    this.resize()
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    autosize: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: [Number],
      'default': null
    },
    maxHeight: {
      type: [Number],
      'default': null
    },
    important: {
      type: [Boolean, Array],
      default: false
    }
  },
  data () {
    return {
      val: null,
      maxHeightScroll: false
    }
  },
  computed: {
    computedStyles () {
      let objStyles = {}

      if (this.autosize) {
        objStyles.resize = !this.isResizeImportant ? 'none' : 'none !important'
        if (!this.maxHeightScroll) {
          objStyles.overflow = !this.isOverflowImportant ? 'hidden' : 'hidden !important'
        }
      }

      return objStyles
    },
    isResizeImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('resize'))
    },
    isOverflowImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('overflow'))
    },
    isHeightImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('height'))
    }
  },
  methods: {
    updateVal () {
      this.val = this.value
    },
    resize: function () {
      const important = this.isHeightImportant ? 'important' : ''

      this.$el.style.setProperty('height', 'auto', important)

      let contentHeight = this.$el.scrollHeight + 1

      if (this.minHeight) {
        contentHeight = contentHeight < this.minHeight ? this.minHeight : contentHeight
      }

      if (this.maxHeight) {
        if (contentHeight > this.maxHeight) {
          contentHeight = this.maxHeight
          this.maxHeightScroll = true
        } else {
          this.maxHeightScroll = false
        }
      }

      const heightVal = contentHeight + 'px'
      this.$el.style.setProperty('height', heightVal, important)
      return this
    }
  },
  watch: {
    value () {
      this.updateVal()
    },
    val (val) {
      this.$nextTick(this.resize)
      this.$emit('input', val)
    }
  }
}
</script>
