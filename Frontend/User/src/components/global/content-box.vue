<template>
<div class="aside aside--box aside--fixed">
	<aside class="static-content">
		<h3>{{ title }}</h3>
		<slot></slot>
	</aside>
</div>
</template>

<style>
.aside {
	float: left;
}
</style>

<script>
export default {
	props: ["title", "content"]
};
</script>
