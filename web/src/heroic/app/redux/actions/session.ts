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
				id: 1,
				avatar: '',
				credits: 0,
				pixels: 0,
				points: 0,
				online: 1,
				username: 'Chris',
				motto: 'I am a guest',
				account_created: 1560056677
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
