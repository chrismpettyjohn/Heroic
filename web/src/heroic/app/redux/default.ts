import Redux from 'heroic/app/interface/redux'

const Default: Redux = {
	core: {
		articles: [],
		loading: true
	},
	pages: {
		community: {
			staff: {
				data: [],
				loaded: false
			},
			leaderboard: {
				data: [],
				loaded: false
			},
			online: {
				data: [],
				loaded: false
			},
			rooms: {
				data: [],
				loaded: false
			},
			photos: {
				data: [],
				loaded: false
			}
		}
	},
	website: {
		SITE_NAME: 'Habbo'
	},
	session: {
		active: false,
		ready: false,
		user: null
	}
}

export default Default
