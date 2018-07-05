<template>
<span></span>
</template>

<script>
export default {
	props: ['title'],
	created: function () {
		document.title = `${this.title} - Heroic Admin`
	}
}
</script>
