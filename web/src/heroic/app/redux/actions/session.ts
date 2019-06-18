import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'

export default bindActions(store => ({

	// Check Local Storage for prior session, otherwise start empty one
	initialize: state => {

	},

	attempt: async (state: Redux, username: string, password: string) => {
		if (username === 'Chris' && password === 'cyclone') {
			store.setState({
				session: {
					active: true,
					ready: true,
					user: {
						username: 'Chris',
						motto: 'I am a guest'
					}
				}
			})
		}
		else {
			throw new Error('Rejected credentials')
		}
	},

	logout: () => ({
		session: {
			active: false,
			ready: true,
			user: null
		}
	})



}), Store)
