<template>
  <section v-cloak>
    <article v-for="article in articles" class="news-header news-header--column">
      <router-link :to="{ name : 'Community.News.Article', params : { id : article.id } }" class="news-header__link news-header__banner">
        <figure class="news-header__viewport">
          <img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}.png`" class="news-header__image news-header__image--featured">
          <img :src="`https://images.habbo.com/web_images/habbo-web-articles/${article.image}_thumb.png`" class="news-header__image news-header__image--thumbnail">
        </figure>
      </router-link>
      <router-link :to="{ name : 'Community.News.Article', params : { id : article.id } }" class="news-header__link news-header__wrapper">
        <h2 class="news-header__title">{{ article.title }}</h2>
      </router-link>
      <aside class="news-header__wrapper news-header__info">
        <time class="news-header__date">Jul 2, 2018</time>
        <ul class="news-header__categories">
          <li class="news-header__category">
            <router-link :to="{ name : 'Community.News.Category', params : { id : article.category.id } }" class="news-header__category__link"">
              {{ article.category.title }}
            </router-link>
          </li>
        </ul>
      </aside>
      <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
    </article>
  </section>
</template>

<script>
import API from '@/app/api'
export default {
  data () {
    return {
      loading: true,
      error: false,
      articles: null
    }
  },
  mounted () {
    // Load Article
    API.get('article/latest/category')
      .then(articles => {
        // Set first
        articles.data[0].first = true
        // Return
        this.articles = articles.data
      })
      .catch(error => {
        this.error = true
        this.loading = false
      })
  },
  props: ['id']
}
</script>
