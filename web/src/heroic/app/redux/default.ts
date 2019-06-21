import Redux from 'heroic/app/interface/redux'

const Default: Redux = {
	core: {
		articles: [],
		loading: true
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
