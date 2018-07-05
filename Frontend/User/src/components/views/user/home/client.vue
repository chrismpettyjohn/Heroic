<template>
	<div class="client">
	<page-title title="Client"></page-title>
		<div class="client__buttons">
			<router-link :to="{ name : 'user.home.me' }" class="client__close">
				<i class="client__close__icon icon icon--habbo"></i>
				<div class="client__close__expand">
					<div class="client__close__text">
						Web
					</div>
				</div>
			</router-link>
		</div>

		<div class="habbo-client-error enable-flashplayer" id="client">
			<div v-if="!system.error" class="client-error">
				<h1>Preparing Client</h1>
				<p>Please wait while the client is loading.</p>
				<p><b>Progress:</b> {{ system.step }}</p>
			</div>
			<div v-if="system.error" class="client-error">
				<h1>Client Error</h1>
				<p>{{ system.error }}</p>
				<a  v-if="!system.flash" class="hotel-button" href="https://get.adobe.com/flashplayer/" id="ga-linkid-hotel" style="width:250px;" target="_blank"><span class="hotel-button__text" style="overflow:auto;">Enable Flash Player</span></a>
			</div>
		</div>
	</div>
</template>

<script>
import SWF from 'swfobject'
import HTTP from '@/app/utilities/http'
export default {
	data() {
		return {
			website : localStorage.getObject('website'),
			client	: {
				variables 			: {},
				paramaters 			: {},
				authentication 	: null
			},
			system	: {
				error 	: false,
				loading : true,
				step    : null,
				flash   : true
			}
		}
	},
	mounted : async function () {
		try {
			// Check flash
			this.system.step = 'Checking Flashplayer'
			await this.check()
			// Generate user SSO
			this.system.step = 'Authenticating client login'
			await this.sso()
			// Prepare client swfobject
			this.system.step = 'Preparing game environment'
			await this.configure()
			// Embed swfobject into DOM
			this.system.step = 'Fetching client assets'
			await this.prepare()
		} catch (error) {
			this.system.error = error
		}
	},
	methods : {
		check() {
			return new Promise ((resolve, reject) => {
				if (SWF.hasFlashPlayerVersion('9')) {
					resolve()
				} else {
					this.system.flash = false
					reject('Flashplayer is either not installed or allowed.')
				}
			})
		},
		sso () {
			return new Promise ((resolve, reject) => {
				HTTP.get('session/client')
					.then (sso => {
						this.client.authentication = sso.data
						resolve()
					})
					.catch (error => {
						this.system.error = 'Failed to authenticate client'
						reject('Failed to authenticate client session')
					})
			})
		},
		configure() { 
			return new Promise((resolve, reject) => {
				// Variables
				this.client.variables = {
					"connection.info.host"				: this.website.server.ip,
					"connection.info.port"				: this.website.server.port,
					"url.prefix"						: this.website.link,
					"site.url"							: this.website.link,
					"external.variables.txt"			: `${this.website.swf.gamedata}/variables.txt`,
					"external.texts.txt"				: `${this.website.swf.gamedata}/texts.txt`,
					"productdata.load.url"				: `${this.website.swf.gamedata}/productdata.txt`,
					"furnidata.load.url"				: `${this.website.swf.gamedata}/furnidata.xml`,
					"external.figurepartlist.txt"		: `${this.website.swf.gamedata}/figuredata.xml`,
					"external.figurepartlist.txt"		: `${this.website.swf.gamedata}/figuredata.xml`,
					"external.override.variables.txt"	: `${this.website.swf.gamedata}/override/variables.txt`,
					"flash.client.url"					: `${this.website.swf.base}/`,
					"client.starting.revolving"			: "Heroic Beta 3.0.1",
					"use.sso.ticket"					: "1",
					"sso.ticket"						: "beautiful-fucking-girl",
					"flash.client.origin"               : "popup",
					"client.allow.cross.domain"         : "1",
					"client.notify.cross.domain"        : "0"
				}  
				// Paramaters
				this.client.paramaters = {
					"base": `${this.website.swf.base}/`,					
					"allowScriptAccess": "always",
					"menu": "false"
				}
				// Return
				resolve()
			})
		},
		prepare() { 			
			SWF.embedSWF(`${this.website.swf.gamedata}/habbo.swf`, "client", "100%", "100%", "10.0.0", "", this.client.variables, this.client.paramaters, null);
		}
	}
}
</script>
