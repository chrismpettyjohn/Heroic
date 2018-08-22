<template>
  <div v-if="state.ready">
    <nav class="navigation">
      <ul class="navigation__menu">
        <li
          v-for="page in navi.links"
          :key="page.id"
          class="navigation__item">
          <router-link
            :to="{ name : page.link }"
            :class="`navigation__link--${page.class}`"
            class="navigation__link"> {{ page.text }}</router-link>
        </li>
        <li class="navigation__item navigation__item--aside navigation__item--hotel">
          <router-link
            id="ga-linkid-hotel"
            :to="{ name : 'Home.Client' }"
            class="hotel-button">
            <span class="hotel-button__text"><small>{{ online }} Online</small></span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="habbo-tabs">
      <ul class="tabs tabs__menu">
        <li
          v-for="page in navi.active"
          :key="page.id"
          class="habbo-tab">
          <router-link
            :to="{ name : page.link, params : page.params }"
            :class="{'tab__link--active': state.route.child==page.active}">{{ page.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tools from '@/app/helpers/tools'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'
export default {
  data () {
    return {
      online: Settings.getters.online,
      state: {
        ready: false,
        route: {
          parent: '',
          child: ''
        }
      },
      navi: {
        active: [],
        links: [
          // Home
          {
            active: 'Home',
            text: 'Home',
            link: 'Home.Me',
            class: 'home',
            children: [
              // Me Page
              {
                active: 'Me',
                text: `What's New`,
                link: 'Home.Me'
              },
              // My Profile
              {
                active: 'Profile',
                text: 'Profile',
                link: 'Home.Profile',
                params: {
                  username: Session.state.user.username
                }
              }
            ]
          },
          // Community
          {
            active: 'Community',
            text: 'Community',
            link: 'Community.Photos.List',
            class: 'community',
            children: [
              // Photos
              {
                active: 'Photos',
                text: `Photos`,
                link: 'Community.Photos.List'
              },
              // Rooms
              {
                active: 'Rooms',
                text: `Rooms`,
                link: 'Community.Rooms.List'
              },
              // News
              {
                active: 'News',
                text: `News`,
                link: 'Community.News.Latest'
              },
              // Staff
              {
                active: 'Staff',
                text: `Staff`,
                link: 'Community.Staff'
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    // Update Route State
    if (this.$route.name) {
      this.state.route = {
        parent: Tools.cut(this.$route.name, 0),
        child: Tools.cut(this.$route.name, 1)
      }
      // Load Children
      this.updateChildren()
      // Change State
      this.state.ready = true
    }
  },
  methods: {
    updateChildren () {
      const links = this.navi.links
      const route = this.state.route.parent
      links.forEach(link => {
        if (link.active === route) {
          this.navi.active = link.children
        }
      })
    }
  },
  events: {
    routeChanged (to) {
      this.state.route = {
        active: Tools.cut(to.name, 0),
        child: Tools.cut(to.name, 1)
      }
    }
  }
}
</script>
