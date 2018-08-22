<template>
  <div class="client">
    <page-title>Client</page-title>
    <div class="client__buttons">
      <router-link
        :to="{ name : 'Home.Me' }"
        class="client__close">
        <i class="client__close__icon icon icon--habbo"/>
        <div class="client__close__expand">
          <div class="client__close__text">
            {{ system.site['site_name'] }}
          </div>
        </div>
      </router-link>
    </div>

    <div
      id="client"
      class="habbo-client-error enable-flashplayer">
      <div class="client-error">
        <container style="width:100%;">
          <h4>
            <div class="row">
              <div class="col-1">
                <imager
                  :look="session.user.look"
                  headonly="1"
                  style="width:25px;height:25px;margin-top:-20px;margin-left:-20px;"/>
              </div>
              <div
                class="col-10"
                style="margin-left:10px;">
                Welcome back, {{ session.user.username }}
              </div>
            </div>
          </h4>
          <p><b>Did you know?</b></p>
          <p style="margin-top:-10px;">We are actually ran by a hobbo with purple hair!</p>
          <footer
            class="shop-footer"
            style="width:50%;">
            <p>25% Loaded</p>
          </footer>
        </container>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .habbo-client-error {
    justify-content: initial;
  }
  .client-error {
    background: transparent;
    margin-top: 10%;
    opacity:1;
  }
</style>

<script>
// import SWF from 'swfobject'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'
import Container from '@/components/utility/container'
export default {
  components: {
    'Container': Container
  },
  data () {
    return {
      system: {
        error: false,
        loading: true,
        site: Settings.getters.site
      },
      session: {
        auth: null,
        user: Session.getters.user,
        flash: false
      },
      client: {
        variables: {},
        paramaters: {}
      }
    }
  },
  async mounted () {

  },
  methods: {
    async hasFlash () {

    },
    async getSSO () {

    },
    async configureSWF () {

    },
    async loadSWF () {

    },
    async manageLoading () {

    }
  }
}
</script>
