import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Storage from 'heroic/app/service/storage'
import User from 'heroic/app/interface/data/user'

export default bindActions(store => ({

	// Check Local Storage for prior session, otherwise start empty one
	initialize: ()  => {
		const session: User | null = Storage.get('session') as User | null

		store.setState({
			session: {
				active: !!session,
				ready: true,
				user: session ? session : null
			}
		})

	},

	attempt: async (state: Redux, username: string, password: string) => {
		if (username === 'Chris' && password === 'cyclone') {

			const user = {
				username: 'Chris',
				motto: 'I am a guest'
			}

			Storage.set('session', user)

			store.setState({
				session: {
					active: true,
					ready: true,
					user: user
				}
			})
		}
		else {
			throw new Error('Rejected credentials')
		}
	},

	logout: () => {
		Storage.del('session')
		store.setState({
			session: {
				active: false,
				ready: true,
				user: null
			}
		})
	}

}), Store)
