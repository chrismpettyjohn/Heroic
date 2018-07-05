<template>
	<span></span>
</template>

<script>
export default {
	created() {
		document.title = `${this.title} - ${this.site.meta.name}`
	},
	data() {
		return {
			site: localStorage.getObject('website')
		}
	},
	props: ['title'],
}
</script>
