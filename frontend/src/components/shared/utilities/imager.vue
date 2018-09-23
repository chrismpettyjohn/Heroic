<template>
  <div>
    <div v-if="asPortrait === '1'" class="habbo-portrait" :class="{'small': smallPortrait === '1'}" :style="{backgroundImage: `url(${imager}?figure=${figure}&headonly=${headOnly}&size=${size}&direction=${direction}&head_direction=${headDirection}&action=${action}&gesture=${gesture})`}">
      <i v-if="online !== '2'" :class="{'online': online === '1', 'offline': online === '0'}" />
    </div>
    <div v-if="asPortrait === '0' && asAvatar === '1'" class="habbo-avatar" :style="{backgroundImage: `url(${imager}?figure=${figure}&headonly=${headOnly}&size=${size}&direction=${direction}&head_direction=${headDirection}&action=${action}&gesture=${gesture})`}" />
  </div>
</template>
<script>
export default {
  props: {
    online: {
      type: [String, Number],
      required: false,
      default: '2'
    },
    figure: {
      type: String,
      required: true,
      default: null
    },
    asPortrait: {
      type: String,
      required: false,
      default: '0'
    },
    smallPortrait: {
      type: String,
      required: false,
      default: '0'
    },
    asAvatar: {
      type: String,
      required: false,
      default: '0'
    },
    size: {
      type: String,
      required: false,
      default: 'm'
    },
    direction: {
      type: String,
      required: false,
      default: '2'
    },
    headDirection: {
      type: String,
      required: false,
      default: '2'
    },
    action: {
      type: String,
      required: false,
      default: null
    },
    gesture: {
      type: String,
      required: false,
      default: null
    },
    headOnly: {
      type: String,
      required: false,
      default: '0'
    }
  },
  data () {
    return {
      imager: 'https://www.habbo.com/habbo-imaging/avatarimage'
    }
  }
}
</script>
