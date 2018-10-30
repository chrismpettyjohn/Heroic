<template>
  <div class="heroic-client">
    <div v-if="!client.flashEnabled" class="flash-check-container">
      <div class="jumbotron flex d-block">
        <h2>Flash Player</h2>
        <p>You need to enable flash player before playing {{ settings['site.name'] }}!</p>
        <div style="height:10px" />
        <a class="flash-link" href="https://get.adobe.com/flashplayer/" />
      </div>
    </div>
    <div class="client-buttons" style="display:flex;">
      <div class="button-return" style="border-radius:0px;" @click="$router.push({ name: 'Home.Home' })"><i class="heroic-icon h" />Web</div>
      <div class="button-extra" style="margin-left:2.5px;">{{ online }} Online</div>
    </div>
    <div class="client-container" :class="{'client-loaded': client.loading.done}" v-if="client.flashEnabled">
      <heroic-loading v-if="client.loading.status">{{ client.loading.message }}</heroic-loading>
      <div id="client-area" />
    </div>
  </div>
</template>

<script>
import SWF from 'swfobject'
import { API, Store } from '../../app'

export default {
  data () {
    return {
      settings: Store.Settings.getters.settings,
      client: {
        flashEnabled: false,
        currentRoomId: 0,
        sso: null,
        loading: {
          status: false,
          percentage: 0,
          message: null,
          done: false
        }
      }
    }
  },
  computed: {
    online: () => {
      return Store.Settings.getters.usersOnline
    }
  },
  async mounted () {
    try {
      await this.hasFlash()

      this.client.loading.status = true

      await this.loadSSO()
      await this.loadClient()
      await this.loadInterface()
    } catch (e) {
      if (e.toString() === 'invalid_sso') this.$router.push({ name: 'Home.Logout' })
      if (e.toString() !== 'invalid_sso') this.$router.push({ name: 'Home.Home' })
    }
  },
  methods: {
    async hasFlash () {
      if (SWF.hasFlashPlayerVersion('10')) {
        this.client.flashEnabled = true
        return Promise.resolve('flash_enabled')
      } else {
        this.client.flashEnabled = false
        return Promise.reject(Error('flash_disabled'))
      }
    },
    async loadSSO () {
      try {
        let sso = await API.get('session/client')
        this.client.sso = sso.data
        return Promise.resolve('valid_sso')
      } catch (e) {
        return Promise.reject(Error('invalid_sso'))
      }
    },
    async loadClient () {
      let variables = {
        'connection.info.host': this.settings['server.ip'],
        'connection.info.port': this.settings['server.port'],
        'url.prefix': this.settings['site.link'],
        'site.url': this.settings['site.link'],
        'client.reload.url': `${this.settings['site.link']}/client`,
        'client.fatal.error.url': `${this.settings['site.link']}/client`,
        'client.connection.failed.url': `${this.settings['site.link']}/client`,
        'external.variables.txt': `${this.settings['swf.config']}/variables.txt`,
        'external.texts.txt': `${this.settings['swf.config']}/texts.txt`,
        'productdata.load.url': `${this.settings['swf.config']}/productdata.txt`,
        'furnidata.load.url': `${this.settings['swf.config']}/furnidata.xml`,
        'external.figurepartlist.txt': `${this.settings['swf.config']}/figuredata.xml`,
        'external.override.variables.txt': `${this.settings['swf.config']}/override/variables.txt`,
        'flash.client.url': `${this.settings['swf.base']}/`,
        'client.starting.revolving': `${this.settings['site.name']}`,
        'processlog.enabled': '1',
        'use.sso.ticket': '1',
        'sso.ticket': this.client.sso,
        'flash.client.origin': 'popup',
        'client.allow.cross.domain': '1',
        'client.notify.cross.domain': '0'
      }

      let paramaters = {
        'base': `${this.settings['swf.base']}/`,
        'allowScriptAccess': 'always',
        'menu': 'false'
      }

      SWF.embedSWF(`${this.settings['swf.config']}/habbo.swf`, 'client-area', '100%', '100%', '10.0.0', '', variables, paramaters, null)
      return Promise.resolve()
    },
    async loadInterface () {
      window.FlashExternalInterface = {}

      window.FlashExternalInterface.disconnect = () => {
        console.log('disconnect')
      }

      window.FlashExternalInterface.logout = () => {
        this.$router.push({ name: 'Home.Logout' })
      }

      window.FlashExternalInterface.openHabblet = (page) => {
        if (page === 'avatars') this.$router.push({ name: 'Home.Settings' })
      }

      window.FlashExternalInterface.track = (action, label, value) => {
        console.log(action + label + value)
      }

      window.FlashExternalInterface.legacyTrack = (action, label, value) => {
        if (action === 'navigator' && label === 'private') {
          this.client.currentRoomId = label
        }
        console.log(action + label + value)
      }

      window.FlashExternalInterface.logLoginStep = (step) => {
        if (step === 'client.init.start') this.client.loading.message = 'Starting ' + this.settings['site.name']
        if (step === 'client.init.core.init') this.client.loading.message = 'Gathering Assets'
        if (step === 'client.init.core.socket.ok') this.client.loading.message = 'Connection Established'
        if (step === 'client.init.handshake.start') this.client.loading.message = 'Authenticating'
        if (step === 'client.init.auth.ok') this.client.loading.message = 'Authenticated'
        if (step === 'client.init.config.loaded') {
          this.client.loading.message = 'Almost Ready'

          setTimeout(() => {
            this.client.loading.status = false
            this.client.loading.done = true
          }, 4500)
        }
      }

      window.addEventListener('message', function (data) {
        if (data.data === undefined || null) return
        if (data.data.call === undefined || null) return
        if (data.data.target === undefined || null) return

        if (data.data.call === 'open-link') return document.getElementById('client-area').openlink(data.data.target)
        if (data.data.call === 'open-room') return document.getElementById('client-area').openlink('navigator/goto/' + data.data.target)
      })

      return Promise.resolve()
    }
  }
}
</script>
