<template>
  <div>
    <!-- Page Title -->
    <page-title>News</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching the latest articles</loading>

    <!-- Content -->
    <div
      v-if="!loading"
      style="margin-top:1.5%;">
      <!-- Categories -->
      <header class="news-category__header">
        <span>Show me news about:</span>
        <nav class="news-category__navigation">
          <ul class="news-category__list">
            <li class="news-category__item">
              <a class="news-category__link news-category__link--active">All</a>
            </li>
            <li class="news-category__item">
              <router-link
                v-for="category in categories"
                :to="{ name: 'Community.News.Category', params: { id: category.id }}"
                :key="category.id"
                class="news-category__link">{{ category.title }}</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <!-- Articles -->
      <article
        v-for="article in articles"
        :key="article.id"
        class="news-header">
        <router-link
          :to="{ name : 'Community.News.Article', params : { id: article.id }}"
          class="news-header__link news-header__banner">
          <figure class="news-header__viewport">
            <img
              :src="`/img/news/${article.image}_thumb.png`"
              class="news-header__image news-header__image--thumbnail">
          </figure>
        </router-link>
        <router-link
          :to="{ name : 'Community.News.Article', params : { id: article.id }}"
          class="news-header__link news-header__wrapper">
          <h2 class="news-header__title">{{ article.title }}</h2>
        </router-link>
        <aside class="news-header__wrapper news-header__info">
          <time class="news-header__date">May 1, 2018</time>
          <ul class="news-header__categories">
            <li class="news-header__category">
              <router-link
                :to="{ name: 'Community.News.Category', params: { id: article.category.id }}"
                class="news-header__category__link">{{ article.category.title }}</router-link>
            </li>
          </ul>
        </aside>
        <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
export default {
  data () {
    return {
      loading: true,
      categories: null,
      articles: null
    }
  },
  async mounted () {
    try {
      this.articles = await this.fetchArticles()
      this.categories = await this.fetchCategories()
      this.loading = false
    } catch (e) {
      this.router.push({ name: 'Errors.500' })
    }
  },
  methods: {
    async fetchArticles () {
      try {
        let articles = await API.get('article/lates/category')
        return Promise.resolve(articles.data)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async fetchCategories () {
      try {
        let categories = await API.get('category/all')
        return Promise.resolve(categories.data)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}
</script>
