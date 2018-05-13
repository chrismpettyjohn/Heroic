export default class Controller {
  constructor($http, $localStorage, $state) {
    'ngInject'
    $http.get('/api/auth/users/session/client')
      .then(sso => { 
        console.log(`${$localStorage.website.swf_gamedata}/habbo.swf`)


        var flashvars = {
          "connection.info.host": $localStorage.website.server_ip,
          "connection.info.port": $localStorage.website.server_port,
          "url.prefix": "/me",
          "site.url": "/me",
          "client.reload.url": "/me",
          "client.fatal.error.url": "/client", 
          "client.connection.failed.url": "/me",
          "external.variables.txt": `${$localStorage.website.swf_gamedata}/variables.txt`,
          "external.texts.txt": `${$localStorage.website.swf_gamedata}/texts.txt`,
          "productdata.load.url": `${$localStorage.website.swf_gamedata}/productdata.txt`,
          "furnidata.load.url": `${$localStorage.website.swf_gamedata}/furnidata.xml`,
          "external.figurepartlist.txt": `${$localStorage.website.swf_gamedata}/figuredata.xml`,
          "external.override.texts.txt": `${$localStorage.website.swf_gamedata}/override/texts.txt`,
          "external.override.variables.txt": `${$localStorage.website.swf_gamedata}/override/variables.txt`,
          "external.figurepartlist.txt": `${$localStorage.website.swf_gamedata}/figuredata.xml`,
          "client.starting.revolving": "Already!?",
          "use.sso.ticket": "1",
          "sso.ticket": sso.data,
          "processlog.enabled": "0",
          "flash.client.url": `${$localStorage.website.swf_base}/`,
          "flash.client.origin": "popup",
          "client.allow.cross.domain": "1",
          "client.notify.cross.domain": "0",
        }

        var params = {
          "base": `${$localStorage.website.swf_base}/`,
          "allowScriptAccess": "always",
          "menu": "false"
        } 

        swfobject.embedSWF(`${$localStorage.website.swf_gamedata}/habbo.swf`, "client", "100%", "100%", "10.0.0", "", flashvars, params, null);
      })
      .catch (error => {
        $state.go('errors.500')
      })
  }
}