<template>
  <div class="top-menu" :class="{ opened : open }" v-on-clickaway="hide">
    <div class="user-menu" @click="toggle">
      <div class="menu-container">
        <i class="heroic-icon arrow" />
        <div class="menu-username">{{ session.user.username }}</div>
      </div>
      <heroic-imager as-portrait="1" :figure="session.user.look" action="std" gesture="sml" direction="4" head-direction="4" size="m" />
    </div>
    <div class="user-menu-list">
      <ul>
        <li v-for="item in navi" :key="item.id" @click="$router.push({ name : item.link, params : item.params })">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Store } from '../../../app'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  data () {
    return {
      open: false,
      navi: [
        {
          name: 'My Profile',
          link: 'Home.Profile',
          params: {
            username: Store.Session.getters.session.user.username
          }
        },
        {
          name: 'Logout',
          link: 'Home.Logout'
        }
      ]
    }
  },
  computed: {
    session: () => {
      return Store.Session.getters.session
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    hide () {
      this.open = false
    }
  },
  mixins: [ clickaway ]
}
</script>
