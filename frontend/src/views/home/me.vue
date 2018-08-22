<template>
  <div>
    <!-- Title -->
    <page-title>Home</page-title>
    <h1 class="container row">Welcome Back</h1>
    <div
      class="container row"
      style="color:white;background:#133A5F;border-radius:3px;margin-top:1.5%;">        
      <div
        class="col-6 myinfo"
        hubbo-section="hubbo-home-me"
        :style="`background-image: url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.look}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;action=wav&amp;size=xl);background-position: initial;`">
        <div class="myinfo-container hubbo-border-right">
          <h2>Chris</h2>
          <div class="row">
            <div class="col-6 balance-coins">
              <span>{{ user.credits }}</span>
            </div>
            <div class="col-6 balance-hc">
              <span>0 days</span>
            </div>
            <div class="col-6 balance-duckets">
              <span>{{ user.pixels }}</span>
            </div>
            <div class="col-6 balance-gems">
              <span>{{ user.points }}</span>
            </div>
          </div>

        </div>
      </div>
      <div
        class="col-6"
        hubbo-section="hubbo-home-play"
        hide-data="mobile">
        <strong>WHAT ARE YOU WAITING FOR..?</strong>
        <button
          class="btn-green"
          onclick="HubboGame.show();">Play Habbo</button>
      </div>
    </div>
    <div class="container row">
      <div class="col-6">
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
            <h2 class="news-header__title" style="width:100%;">{{ article.title }}</h2>
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
  </div>
</template>

<style scoped>
  .user {
    background: #0B3E63;
    border-radius: 3px;
    text-align: center;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.3);
    height: 70px;
    width: 66px;
    background-image: url(https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3252-64-67.ch-215-1408.hd-3103-1.ca-3217-110-1325.hr-125-61.lg-3023-110);
    margin: 0 auto;
  }
  .col-closer {
    margin-left: -5px;
  }
  .post textarea {
    display: block;
    background: none;
    border: none;
    width: 100%;
    color: #7ecaee;
    border: none;
    resize: none;
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #7ecaee;
    opacity: 0.6;
  }
</style>

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
