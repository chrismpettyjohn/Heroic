<template>
<div class="content">
	<div class="loading" style="margin-top:0;">
		<h2>Not Found</h2>
		<slot></slot>
		<img src="https://vignette.wikia.nocookie.net/habbo/images/5/58/Frank_26.gif/revision/latest?cb=20120908171257&path-prefix=en">
	</div>
</div>
</template>

<script>
export default {
	props: ['content']
}
</script>
