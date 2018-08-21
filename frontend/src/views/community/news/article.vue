<template>
  <div>
    <!-- Page Title -->
    <page-title>News</page-title>

    <!-- Loading -->
    <loading v-if="loading">We are fetching the latest articles</loading>

    <!-- Content -->
    <div v-if="!loading" style="margin-top:1.5%;">
      <article>
        <header class="news-header news-header--single">
          <div class="news-header__banner">
            <figure class="news-header__viewport">
              <img :src="`/img/news/${article.image}.png`" class="news-header__image news-header__image--featured">
            </figure>
          </div>
          <h1 class="news-header__wrapper news-header__title">{{ article.title }}</h1>
          <aside class="news-header__wrapper news-header__info">
            <time class="news-header__date">{{ article.timestamp | date }}</time>
            <ul class="news-header__categories">
              <li class="news-header__category">
                <router-link :to="{ name : 'Community.News.Category', params : { id : 1 }}" class="news-header__category__link">{{ article.category.title }}</router-link>
              </li>
            </ul>
          </aside>
          <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
        </header>
        <div class="news-article" v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script> 
  import API from '@/app/api'
  import Moment from 'moment'
  export default {
    data() {
      return {
        loading: true,
        article: null
      }
    },
    filters: {
      date (value) {
        return Moment.unix(value).format('MMMM DD, YYYY')
      }
    },
    async mounted() {
      try {
        let article = await API.get(`article/${this.id}/category`)
        this.article = article.data
        this.loading = false
      } catch (e) {
        this.$router.push({ name: 'Errors.500' })
      }
    },
    props: ['id']
  }
</script>