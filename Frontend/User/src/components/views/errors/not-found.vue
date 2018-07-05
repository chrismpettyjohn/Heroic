<template>
  <main class="wrapper wrapper--content not-found">
  	<section class="not-found__content">
  		<h3>Oh bobba! Page not found.</h3>
  		<div>
  			Frank can't find the page you're looking for. Please check the URL or try starting over from the <router-link :to="{ name : 'user.home.me' }">front page.</router-link>
  		</div>
  	</section>
  </main>
</template>
