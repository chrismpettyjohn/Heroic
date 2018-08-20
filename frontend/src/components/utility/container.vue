<template>
	<div class="aside aside--box">
		<div class="static-content">
			<h3 v-if="!icon">{{ title }}</h3>
			<h3 v-if="icon"><img :src="icon"> {{ title }}</h3>
			<slot/>
		</div>
	</div>
	</template>

<script>
export default {
  props: ['title', 'icon']
}
</script>
