<template>
  <div>
    <!-- Title -->
    <page-title>Home</page-title>

    <!-- Welcome Back -->
    <h1 class="container row">Welcome Back</h1>

    <!-- Container -->
    <div class="user-container">
      <div class="row padding">
        <div class="col-2">
          <imager :look="user.look"/>
        </div>
        <div class="col-4">
          <div class="row">
            <h1>{{ user.username }}</h1>
          </div>
          <div class="motto">
            <span>{{ user.motto }}</span>
          </div>
          <div class="row economy">
            <div class="col-6 currency credits">
              <span>1,000</span>
            </div>
            <div class="col-6 currency club">
              <span>30 days</span>
            </div>
            <div class="col-6 currency pixels">
              <span>2,000</span>
            </div>
            <div class="col-6 currency points">
              <span>10</span>
            </div>
          </div>
        </div>
        <div class="col-4 hotel-wrapper">
          <router-link :to="{ name: 'Home.Client' }" class="register-banner__button">Enter Hotel</router-link>
        </div>
      </div>
    </div>

    <!-- Articles -->
    <div class="container row">
      <div class="col-6">
        <article v-for="article in articles" :key="article.id" class="news-header">
          <router-link :to="{ name : 'Community.News.Article', params : { id: article.id }}" class="news-header__link news-header__banner">
            <figure class="news-header__viewport">
              <img :src="`/img/news/${article.image}_thumb.png`" class="news-header__image news-header__image--thumbnail">
            </figure>
          </router-link>
          <router-link :to="{ name : 'Community.News.Article', params : { id: article.id }}" class="news-header__link news-header__wrapper">
            <h2 class="news-header__title" style="width:100%;">{{ article.title }}</h2>
          </router-link>
          <aside class="news-header__wrapper news-header__info">
            <time class="news-header__date">May 1, 2018</time>
            <ul class="news-header__categories">
              <li class="news-header__category">
                <router-link :to="{ name: 'Community.News.Category', params: { id: article.category.id }}" class="news-header__category__link">{{ article.category.title }}</router-link>
              </li>
            </ul>
          </aside>
          <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
import Session from '@/app/storage/session'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      user: Session.state.user,
      articles: null
    }
  },
  async mounted () {
    try {
      let articles = await API.get('article/latest/category')
      this.articles = articles.data
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  }
}
</script>
