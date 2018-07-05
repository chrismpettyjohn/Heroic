import HTTP from '@/app/utilities/http'
export default class Website {
	constructor() {
		HTTP.get('settings').then(site => {
			// Parse 
			site = site.data[0]
			console.log(site)
			// Format
			site = {
				meta : {
					name : site.site_name,
					link : site.site_link
				},
				server: {
					ip: site.server_ip,
					port: site.server_port
				},
				swf: {
					base: site.swf_base,
					gamedata: site.swf_gamedata
				}
			}
			// Add to localStorage 
			localStorage.setObject('website', site)
		})
		.catch(error => {
		})
	}
}