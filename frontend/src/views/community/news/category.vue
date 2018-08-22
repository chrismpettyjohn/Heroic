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
              <router-link
                :to="{ name: 'Community.News.Latest' }"
                class="news-category__link">All</router-link>
            </li>
            <li
              v-for="cata in categories"
              :key="cata.id"
              class="news-category__item">
              <router-link
                :to="{ name: 'Community.News.Category', params: { id: cata.id }}"
                :class="{'news-category__link--active': category.id===cata.id}"
                class="news-category__link">{{ cata.title }}</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <!-- Articles -->
      <article
        v-for="article in category.articles"
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
              <a class="news-header__category__link">{{ category.title }}</a>
            </li>
          </ul>
        </aside>
        <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
      </article>
      <div v-if="category.articles.length===0">
        <p>No news articles have been posted yet...</p>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    data: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      loading: true,
      category: null,
      categories: []
    }
  },
  async mounted () {
    try {
      this.category = await this.fetchCategory()
      this.categories = await this.fetchCategories()
      this.loading = false
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  },
  methods: {
    async fetchCategory () {
      try {
        let category = await API.get(`category/${this.id}/articles`)
        return Promise.resolve(category.data)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async fetchCategories () {
      try {
        let category = await API.get(`category/all`)
        return Promise.resolve(category.data)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}
</script>
