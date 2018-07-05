<template>
<div>
  <section v-cloak>
    <article v-for="article in articles">
      <header class="news-header news-header--single">
        <div class="news-header__banner">
          <figure class="news-header__viewport">
            <img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}.png`" class="news-header__image news-header__image--featured">
          </figure>
        </div>
        <router-link :to="{ name : 'user.community.news.article', params : { id: article.id }}">
          <h1 class="news-header__wrapper news-header__title">{{ article.title }}</h1>
        </router-link>
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
    </article>
  </section>
</div>
</template>


<script>
import HTTP from "@/app/utilities/http";
export default {
  data() {
    return {
      loading: true,
      error: false,
      articles: null
    };
  },
  mounted() {
    // Load Article
    HTTP.get(`/system/news/article`)
      .then(articles => {
        this.articles = articles.data
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
  },
  props: ["id"]
};
</script>
