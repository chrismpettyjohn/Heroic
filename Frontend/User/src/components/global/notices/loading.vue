<template>
<div class="content">
	<div class="loading" style="margin-top:0;">
		<h1>Please Wait</h1>
		<p><slot></slot></p>
		<img src="/img/habbos_jumping.gif">
	</div>
</div>
</template>

<script>
export default {
  props: ["content"]
};
</script>
