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
              <p>{{ article.caption }}</p>
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
import { Store } from '@/app'
export default {
  data () {
    return {
      online: Store.Settings.getters.usersOnline,
      articles: [
        {
          image: 'lpromo_bundebazzaretahouseaugust2017',
          title: 'Creativity Rocks',
          caption: 'Build the rooms of your dreams without limits'
        },
        {
          image: 'lpromo_2016doublecredits',
          title: 'Become Rich',
          caption: 'All the credits you could ever wish for'
        },
        {
          image: 'lpromo_alice-1',
          title: 'Get Weird',
          caption: 'Reveal your true colors and just have fun!'
        },
        {
          image: 'lpromo_4thdaystoryjuly2017',
          title: 'Make Friends',
          caption: 'Meet new people and conquer the world!'
        }
      ]
    }
  }
}
</script>
