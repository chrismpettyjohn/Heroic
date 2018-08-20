<template>
	<div v-if="state.ready">
		<nav class="navigation">
			<ul class="navigation__menu">
				<li v-for="page in navi.links" class="navigation__item">
					<router-link to="/me" class="navigation__link" :class="`navigation__link--${page.class}`"> {{ page.text }}</router-link>
				</li>
        <li class="navigation__item navigation__item--aside navigation__item--hotel">
          <router-link :to="{ name : 'Home.Client' }" class="hotel-button" id="ga-linkid-hotel">
            <span class="hotel-button__text"><small>0 Online</small></span>
          </router-link>
        </li>
			</ul>
		</nav>
		<div class="habbo-tabs">
			<ul class="tabs tabs__menu">
				<li v-for="page in navi.active" class="habbo-tab">
					<router-link :to="{ name : page.link, params : page.params }" :class="{'tab__link--active': state.route.child==page.active}">{{ page.text }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Tools from '@/app/helpers/tools'
import Session from '@/app/storage/session'
export default {
  data () {
    return {
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
          }
        ]
      }
    }
  },
  methods: {
    updateChildren () {
      const links = this.navi.links
      const route = this.state.route.parent
      links.forEach(link => {
        if (link.active == route) {
          this.navi.active = link.children
        }
      })
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
