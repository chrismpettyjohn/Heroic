<template>
  <div>
    <!-- Page Title -->
    <page-title>{{ state.user }}'s Profile</page-title>

    <!-- Loading -->
    <loading v-if="!state.ready">We are fetching the profile of {{ state.user }} for you!</loading>

    <!-- Profile -->
    <div v-if="state.ready">
      <!-- Row -->
      <div class="row">
        <div class="col-2"/>
        <div class="col-8">
          <div class="habbo-profile-header">
            <div class="profile-header__avatar">
              <div class="profile-header__link">
                <div class="habbo-imager profile-header__image">
                  <imager :look="user.look"/>
                </div>
              </div>
            </div>
            <div class="profile-header__details">
              <h1>{{ user.username }}</h1>
              <div class="profile__motto">
                {{ user.motto }}
              </div>
            </div>
          </div>
          <div class="profile-badge">
            <img v-if="user.permission.rank_type==='staff'" :src="`${settings['swf.base'].replace('base','')}/images/album1584/ADM.gif`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .profile-badge {
    position: absolute;
    right: 38%;
    top: 38%;
  }
</style>
<script>
import API from '@/app/api'
import Moment from 'moment'
import Settings from '@/app/storage/settings'
import Modal from '@/components/utility/modal'
export default {
  components: {
    'Modal': Modal
  },
  filters: {
    date (value) {
      return Moment.unix(value).format('MMM D, YYYY')
    }
  },
  props: {
    username: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      state: {
        ready: false,
        user: this.username,
        modals: {
          badges: false,
          friends: false
        }
      },
      settings: Settings.getters.site,
      user: {}
    }
  },
  async mounted () {
    try {
      let profile = await API.get(`user/${this.state.user}/permission`)
      this.user = profile.data
      this.state.ready = true
    } catch (e) {
      this.$router.push({ name: 'Errors.404' })
    }
  },
  methods: {
    // Activates modal
    toggleModal (what) {
      this.state.modals[what] = !this.state.modals[what]
    },
    // Returns status
    isModal (what) {
      return this.state.modals[what]
    }
  }
}
</script>
