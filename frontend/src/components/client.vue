<template>
  <div class="client client-loading">
    <!-- Enable Flash Warning -->
    <div v-if="!state.flash" class="client-message">
      <div class="client-box">
        <div class="title">Hotel Notification</div>
        <div class="content">
          <div class="row">
            <div class="col-2">
              <img src="https://www.habboxwiki.com/wiki/images/c/c6/Frank_23.gif">
            </div>
            <div class="col-3"/>
            <div class="col-6">
              <h5>Flash Player</h5>
              <p>You need to enable flash player before playing {{ state.site['site.name'] }}!</p>
              <a href="https://get.adobe.com/flashplayer/"><img src="/img/pages/flash-player.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Screen -->
    <div v-if="loading && state.flash" class="client-message">
      <div class="loader">
        <div class="loader-image"/>
        <div class="loader-bg"/>
        <div class="loader-loading">
          <img src="/img/pages/sipping-tea.png">
          <div class="loader-loading-heading">{{ state.site['site.name'] }} is starting up!</div>
          <div class="loader-loading-bar">
            <div class="loader-loading-bar-inner-bar" :style="`width:${loading}%`"/>
          </div>
          <div class="loader-loading-percentage">{{ loading }}%</div>
        </div>
      </div>
    </div>

    <!-- Game Area -->
    <div v-if="state.flash" class="full-height">
      <div class="client__buttons">
        <button @click="closeClient()" class="client__close"><i class="client__close__icon icon icon--habbo" style="margin-right:5px;"/> Website</button>
        <button @click="refreshClient()" class="client__fullscreen" style="margin-left:-3px;">Reload</button>
        <button class="client__fullscreen" style="margin-left:-3px;">{{ online }} Online</button>
      </div>
      <div id="play-area"/>
    </div>
  </div>
</template>

<style scoped>
  .client-loading {
    background: #174D76;
    background-image: url('/img/client.png');
  }
  .client-message {
    margin-top: 10%;
  }
  .client-box {
    color: white;
    width: 25%;
    margin: 0 auto;
  }
  .client-box .title {
    background: #367897;
    width: 100%;
    padding: 2%;
    font-size: 1em;
    text-align: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-weight: 600;
  }
  .client-box .content {
    display: block;
    background: #E9E9E1;
    color: #141414;
    width: 100%;
    padding: 2%;
    font-size: 1em;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .client-box .content h5 {
    color: #141414;
    text-align: center;
  }
  .client-box .content p {
    text-align: left;
    font-size: .8em;
  }
  .loader .loader-image {
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    width: 422px;
    height: 320px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200
  }
  .loader .loader-loading {
    margin: 0 auto;
    width: 200px;
    text-align: center;
  }
  .loader .loader-loading .loader-loading-bar {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 2px;
    height: 28px;
    margin-bottom: 10px;
    padding: 2px;
  }
  .loader .loader-loading .loader-loading-bar .loader-loading-bar-inner-bar {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(56, 136, 159, 1) 0%, rgba(89, 168, 209, 1) 48%, rgba(0, 121, 255, 1) 100%);
    height: 22px;
    width: 0;
  }
  .loader .loader-loading .loader-loading-heading {
    color: #fff;
    margin-bottom: 10px;
    font-size: 14px;
  }
  .loader .loader-loading .loader-loading-percentage {
    color: #fff;
    font-weight: 500;
    font-size: 10pt
  }
  .full-height {
    width: 100%;
    height: 100%;
  }
  #play-area {
    width: 100%;
    height: 100%;
  }
</style>

<script>
import SWF from 'swfobject'
import API from '@/app/api'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'
export default {
  computed: {
    online () {
      return Settings.getters.online
    }
  },
  data () {
    return {
      loading: 10,
      state: {
        error: false,
        site: Settings.getters.site,
        flash: true
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
    try {
      await this.hasFlash()
      await this.initGame()
    } catch (e) {
      // Absorb Error
    }
  },
  methods: {
    async initGame () {
      await this.getSSO()
      await this.configureSWF()
      await this.loadSWF()
      await this.startInterface()
    },
    async hasFlash () {
      if (SWF.hasFlashPlayerVersion('10')) {
        return Promise.resolve()
      } else {
        this.state.flash = false
        return Promise.resolve()
      }
    },
    async getSSO () {
      try {
        let sso = await API.get('session/client')
        this.session.auth = sso.data
        return Promise.resolve()
      } catch (e) {
        return Promise.reject(Error(true))
      }
    },
    async configureSWF () {
      const site = this.state.site
      // Variables
      this.client.variables = {
        'connection.info.host': site['server.ip'],
        'connection.info.port': site['server.port'],
        'url.prefix': site['site.link'],
        'site.url': site['site.link'],
        'external.variables.txt': `${site['swf.config']}/variables.txt`,
        'external.texts.txt': `${site['swf.config']}/texts.txt`,
        'productdata.load.url': `${site['swf.config']}/productdata.txt`,
        'furnidata.load.url': `${site['swf.config']}/furnidata.xml`,
        'external.figurepartlist.txt': `${site['swf.config']}/figuredata.xml`,
        'external.override.variables.txt': `${site['swf.config']}/override/variables.txt`,
        'flash.client.url': `${site['swf.base']}/`,
        'client.starting.revolving': 'HabFort Hotel',
        'processlog.enabled': '1',
        'use.sso.ticket': '1',
        'sso.ticket': this.session.auth,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0'
      }
      // Paramaters
      this.client.paramaters = {
        'base': `${site['swf.base']}/`,
        'allowScriptAccess': 'always',
        'menu': 'false'
      }
      return Promise.resolve()
    },
    async loadSWF () {
      SWF.embedSWF(`${this.state.site['swf.config']}/habbo.swf`, 'play-area', '100%', '100%', '10.0.0', '', this.client.variables, this.client.paramaters, null)
      document.getElementById('play-area').style.visibility = 'hidden'
      return Promise.resolve()
    },
    async startInterface () {
      window.FlashExternalInterface = {}
      const parent = this
      const steps = {
        'client.init.start': 10,
        'client.init.swf.loaded': 20,
        'client.init.core.init': 50,
        'client.init.handshake.start': 75,
        'client.init.config.loaded': 100
      }
      window.FlashExternalInterface.logLoginStep = function (b) {
        if (steps[b]) {
          if (steps[b] === 100) {
            parent.loading = false
            document.getElementById('play-area').style.visibility = 'visible'
          } else {
            parent.loading = steps[b]
          }
        }
      }
      return Promise.resolve()
    },
    async closeClient () {
      await Session.dispatch('client', false)
      this.$router.push({ name: 'Home.Me' })
    },
    async refreshClient () {
      document.getElementById('play-area').style.display = 'none'
      await this.initGame()
    }
  }
}
</script>
