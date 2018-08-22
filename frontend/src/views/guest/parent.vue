<template>
  <div class="login-page">
    <page-title>Login</page-title>
    <router-view class="login-left"/>
    <div class="login-right">
      <div class="login-articles">
        <h1 style="width:60%;display:block;margin-bottom:2.5%;">
          <span style="float:left;">Latest News</span>
          <span style="float:right;font-size:16px;">{{ online }} Online</span>
        </h1>
        <div class="columns">
          <article
            class="news-header news-header--column"
            style="display:none;"/>
          <article
            v-for="article in articles"
            :key="article.id"
            class="news-header news-header--column">
            <a class="news-header__link news-header__banner">
              <figure class="news-header__viewport">
                <img
                  :src="`/img/news/${article.image}_thumb.png`"
                  class="news-header__image news-header__image--thumbnail">
              </figure>
            </a>
            <a class="news-header__link news-header__wrapper">
              <h2 class="news-header__title">{{ article.title }}</h2>
            </a>
          </article>
        </div>
        <footer
          class="shop-footer"
          style="width: 60%;">
          <section class="main shop-footer__main">
            <h3 class="shop-footer__title">About Our Hotel</h3>
            <p class="shop-footer__text">
              We are a hotel dedicated to providing a safe, fast and fun place for you to play with your friends, get creative and explore!
            </p>
          </section>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
import Settings from '@/app/storage/settings'
export default {
  data () {
    return {
      articles: null,
      online: Settings.getters.online
    }
  },
  async mounted () {
    try {
      let articles = await API.get('article/latest')
      this.articles = articles.data
    } catch (e) {
      this.$router.push({ name: 'Errors.500' })
    }
  }
}
</script>
