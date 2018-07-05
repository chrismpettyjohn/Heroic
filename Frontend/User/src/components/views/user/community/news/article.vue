<template>
	<div>

		<!-- Page Title -->
		<page-title title="News"></page-title>

		<!-- Notices -->
		<loading-notice v-if="loading">Fetching article information.</loading-notice>

		<missing-notice v-if="error">
			<p>This article does not exist or couldn't be loaded at this time.</p>
		</missing-notice>

		<!-- Content -->
		<section v-if="!loading && article" class="wrapper wrapper--content">
			<article>
				<header class="news-header news-header--single">
					<div class="news-header__banner">
						<figure class="news-header__viewport">
							<img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}.png`" class="news-header__image news-header__image--featured">
						</figure>
					</div>
					<h1 class="news-header__wrapper news-header__title">{{ article.title }}</h1>
					<aside class="news-header__wrapper news-header__info">
						<time class="news-header__date">May 18, 2018</time>
						<ul class="news-header__categories">
							<li class="news-header__category">
								<a class="news-header__category__link">{{ article.category.title }}</a>
							</li>
						</ul>
					</aside>
					<p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
				</header>
				<div class="news-article" v-html="article.content"></div>
			</article>
		</section>
	</div>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      loading: true,
      error: false,
      article: null
    };
  },
  mounted() {
    // Load Article
    HTTP.get(`/system/news/article/${this.id}`)
      .then(article => {
        console.log(article);
        this.article = article.data;
        this.loading = false;
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
  },
  props: ["id"]
};
</script>
