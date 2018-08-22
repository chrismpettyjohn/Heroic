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
        </div>
      </div>
      <!-- Row -->
      <div class="row">
        <!-- Badges -->
        <div
          v-if="user.badges.length > 0"
          class="col-6">
          <div
            class="profile__card__wrapper--badges"
            style="width:100%;">
            <section class="profile__card__aligner">
              <div class="profile__card">
                <h2 class="profile__card__title">Badges</h2>
                <!-- List -->
                <div class="item-list--grid">
                  <ul>
                    <li
                      v-for="badge in user.badges.slice(0, 5)"
                      v-if="badge.meta"
                      :key="badge.id"
                      class="item item--small item--badge">
                      <div class="item__content">
                        <div class="item__icon">
                          <div class="item__icon__aligner">
                            <img :src="`https://images.habbo.com/c_images/album1584/${badge.badge_code}.gif`">
                          </div>
                        </div>
                        <div class="item__text">
                          <h6 class="item__title item__title--multi-line">{{ badge.meta.name }}</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Footer -->
                <div class="profile__card__footer">
                  <p
                    class="profile-modal__link"
                    @click="toggleModal('badges')">See all</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- Friends -->
        <div
          v-if="user.friends.length > 0"
          class="col-6">
          <div
            class="profile__card__wrapper--friends"
            style="width:100%;">
            <section class="profile__card__aligner">
              <div class="profile__card">
                <h2 class="profile__card__title">Friends</h2>
                <!-- List -->
                <div class="item-list--grid">
                  <ul>
                    <li
                      v-for="friend in user.friends.slice(0, 5)"
                      :key="friend.id"
                      class="item item--friend">
                      <router-link
                        :to="{ name: 'Home.Profile', params: { username : friend.user.username } }"
                        class="item__content">
                        <div class="item__icon">
                          <imager
                            :look="friend.user.look"
                            class="imager"/>
                        </div>
                        <div class="item__text">
                          <h6 class="item__title item__title--single-line">{{ friend.user.username }}</h6>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <!-- Footer -->
                <div class="profile__card__footer">
                  <p
                    class="profile-modal__link"
                    @click="toggleModal('friends')">See all</p>
                </div>
                <!-- Modal -->
                <modal
                  v-if="isModal('friends')"
                  title="Friends"
                  @close="toggleModal('friends')">
                  <div class="item-list--stacked">
                    <ul>
                      <li
                        v-for="friend in user.friends"
                        :key="friend.id"
                        class="item item--friend">
                        <router-link
                          :to="{ name: 'Home.Profile', params: { username : friend.user.username } }"
                          class="item__content">
                          <div class="item__icon">
                            <imager
                              :look="friend.user.look"
                              class="imager"/>
                          </div>
                          <div class="item__text">
                            <h6 class="item__title item__title--single-line">{{ friend.user.username }}</h6>
                            <p class="item__description">Friends Since {{ friend.friends_since | date }}</p>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </modal>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!-- Row -->
      <div class="row">
        <footer class="wrapper wrapper--content">
          <h2 class="profile__joined">Joined on {{ user.account_created | date }}</h2>
          <div class="profile__hearts"><i class="icon icon--heart"/><i class="icon icon--heart"/><i class="icon icon--heart"/></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/app/api'
import Moment from 'moment'
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
      user: {}
    }
  },
  async mounted () {
    try {
      let profile = await API.get(`user/${this.state.user}/badges,friends,friends.user`)
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
