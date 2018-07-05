<template>
<div>
	<img class="imager" v-if="headonly" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${look}&headonly=1`">
	<img class="imager" v-if="!headonly" :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${look}`">
</div>
</template>

<script>
export default {
	props: ['look', 'headonly']
}
</script>
