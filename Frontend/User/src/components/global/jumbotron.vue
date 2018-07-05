<template>
	<div>
		<header class="rooms__header" v-if="info">
			<div class="rooms__header__container wrapper">
				<div class="rooms__header__image__wrapper">
					<div class="rooms__header__image" v-if="info.image" :style="`background:url(${info.image.src});width:${info.image.width};height:${info.image.height}`"></div>
					<div class="rooms__header__image" v-if="!info.image"></div>
				</div>
				<div class="rooms__header__content">
					<h1 class="rooms__header__title">{{ info.title }}</h1>
					<p>{{ info.content }}</p>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
  data() {
    return {
      info: this.$route.meta.jumbotron ? this.$route.meta.jumbotron : false
    };
  }
};
</script>
