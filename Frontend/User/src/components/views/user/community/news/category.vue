<template>
<div>
	<!-- Page Title -->
	<page-title title="News"></page-title>

	<!-- Notices -->
	<loading-notice v-if="loading">Fetching the latest news articles</loading-notice>

	<missing-notice v-if="error">
		<p>Something went wrong and this page cannot be loaded.</p>
	</missing-notice>

	<!-- Content -->
	<section v-if="!loading && !error" class="wrapper wrapper--content">
		<header class="news-category__header">
			<span translate="news_show_more">Show me news about:</span>
			<nav class="news-category__navigation">
				<ul class="news-category__list">
					<li class="news-category__item">
						<a @click="active=false" :class="{'news-category__link--active': !active}" class="news-category__link">All</a>
						<a v-for="category in categories" @click="setActive(category.id)" :class="{'news-category__link--active': active.id==category.id}" class="news-category__link">{{ category.title }}</a>
					</li>
				</ul>
			</nav>
		</header>
		<!-- Display All Articles -->
		<div v-if="!active">
			<article v-for="article in articles" class="news-header">
				<router-link :to="{ name : 'user.community.news.article', params : { id : article.id }}" class="news-header__link news-header__banner">
					<figure class="news-header__viewport">
						<img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}_thumb.png`" class="news-header__image news-header__image--thumbnail">
					</figure>
				</router-link>
				<router-link :to="{ name : 'user.community.news.article', params : { id : article.id  }}" class="news-header__link news-header__wrapper">
					<h2 class="news-header__title">{{ article.title }}</h2>
				</router-link>
				<aside class="news-header__wrapper news-header__info">
					<time class="news-header__date">May 1, 2018</time>
					<ul class="news-header__categories">
						<li class="news-header__category">
							<a @click="setActive(article.category_id)" class="news-header__category__link">{{ article.category.title }}</a>
						</li>
					</ul>
				</aside>
				<p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
			</article>
			<div v-if="articles.length===0">
			   <p>No news articles have been posted yet...</p>
			</div>
		</div>

		<!-- Display Single Category -->
		<div v-if="active">
			<article v-for="article in active.articles" class="news-header">
				<router-link :to="{ name : 'user.community.news.article', params : { id : article.id }}" class="news-header__link news-header__banner">
					<figure class="news-header__viewport">
						<img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}_thumb.png`" class="news-header__image news-header__image--thumbnail">
					</figure>
				</router-link>
				<router-link :to="{ name : 'user.community.news.article', params : { id : article.id }}" class="news-header__link news-header__wrapper">
					<h2 class="news-header__title">{{ article.title }}</h2>
				</router-link>
				<aside class="news-header__wrapper news-header__info">
					<time class="news-header__date">May 1, 2018</time>
					<ul class="news-header__categories">
						<li class="news-header__category">
							<a class="news-header__category__link">{{ active.title }}</a>
						</li>
					</ul>
				</aside>
				<p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
			</article>
		</div>
	</section>
</div>
</template>

<script>
import HTTP from '@/app/utilities/http'
export default {
  data() {
    return {
      categories: [],
      loading: true,
      error: false,
      active: false,
      articles: []
    };
  },
  methods: {
    setActive(id) {
      this.categories.forEach(cata => {
        if (cata.id == id) {
          this.active = cata;
        }
      });
    }
  },
  mounted() {
    // Load Categories
    HTTP.get("system/news/category")
      .then(categories => {
        this.categories = categories.data;
        this.loading = false;
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
    // Load All Articles
    HTTP.get("system/news/article")
      .then(articles => {
        this.articles = articles.data;
      })
      .catch(error => {
        this.error = true;
      });
  }
};
</script>
