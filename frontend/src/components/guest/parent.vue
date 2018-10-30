<template>
  <div class="heroic-guest flex">
    <router-view class="flex flex-expand justify-center align-center login-left" />
    <div class="flex flex-8 justify-center align-center login-right">
      <div class="right-inner">
        <h6>{{ online }} Online</h6>
        <h2>Latest News</h2>
        <div v-if="articles" class="flex flex-row flex-wrap">
          <div v-for="article in articles.slice(0, 4)" :key="article.id" class="flex flex-6 has-margin">
            <div class="article">
              <img :src="`/images/news/${article.image}_thumb.png`">
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row has-big-margin">
          <div class="jumbotron flex flex-column flex-7">
            <h2>About Our Hotel</h2>
            <p>We are a hotel dedicated to providing a safe, fast and fun place for you to play with your friends, get creative and explore!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API, Store } from '@/app'
export default {
  data () {
    return {
      online: Store.Settings.getters.usersOnline,
      articles: null
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
