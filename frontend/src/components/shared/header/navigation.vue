<template>
  <div class="header-navigation">
    <div class="navigation-top">
      <div class="top-container">
        <ul>
          <li v-for="item in navi" :key="item.id" :class="{'active': router.currentParent === item.name || router.currentGrandParent === item.name}" @click="$router.push({ name: item.link, params: item.params })">
            <i class="heroic-icon" :class="item.icon" />{{ item.name }}
          </li>
        </ul>
        <a class="hotel-button" @click="$router.push({ name : 'Home.Client' })">
          Hotel <small class="margin-left">{{ online }} Online</small><i class="heroic-icon hotel" />
        </a>
      </div>
    </div>
    <div class="navigation-bottom">
      <div class="bottom-container">
        <ul v-for="item in navi" :key="item.id" v-if="router.currentParent === item.name || router.currentGrandParent === item.name">
          <li v-for="child in item.children" :key="child.id" :class="{'active': router.currentRoute === child.link || router.currentParent === child.router}" @click="$router.push({ name: child.link, params: child.params })">
            {{ child.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin-left {
  padding-left: .5em;
  padding-top: .2em;
}
</style>

<script>
import { Store } from '../../../app'

export default {
  data () {
    return {
      router: {
        currentRoute: null,
        currentParent: null,
        currentGrandParent: null
      },
      navi: [
        {
          name: 'Home',
          link: 'Home.Home',
          icon: 'home',
          children: [
            {
              name: 'Home',
              link: 'Home.Home'
            },
            {
              name: 'Profile',
              link: 'Home.Profile',
              params: {
                username: Store.Session.getters.session.user.username
              }
            }
          ]
        },
        {
          name: 'Community',
          link: 'Community.Photos',
          icon: 'community',
          children: [
            {
              name: 'Photos',
              link: 'Community.Photos'
            },
            {
              name: 'Rooms',
              router: 'Community.Rooms',
              link: 'Community.Rooms.List'
            },
            {
              name: 'Staff',
              link: 'Community.Staff'
            },
            {
              name: 'Top Users',
              link: 'Community.Leaderboards'
            },
            {
              name: 'Online',
              link: 'Community.Online'
            }
          ]
        }
      ]
    }
  },
  computed: {
    online: () => {
      return Store.Settings.getters.usersOnline
    }
  },
  methods: {
    setRoute (router) {
      this.router.currentRoute = router.name
      this.router.currentParent = (router.matched[1].name === router.name) ? router.matched[0].name : router.matched[1].name
      this.router.currentGrandParent = (router.matched[1].name === router.name) ? null : router.matched[0].name
    }
  },
  mounted () {
    this.setRoute(this.$router.currentRoute)
  },
  watch: {
    '$route' (to, from) {
      this.setRoute(to)
    }
  }
}
</script>
