import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import {API, setToken} from 'heroic/app/api'
import Storage from 'heroic/app/service/storage'
import User from 'heroic/app/interface/data/user'

export default bindActions(store => ({

	// Check Local Storage for prior session, otherwise start empty one
	initialize: async ()  => {
		const session: string | null = Storage.get('session') as string| null
		setToken(session)

		const user: User | null = session
			? await API.get('session')
			: null

		store.setState({
			session: {
				active: !!session,
				ready: true,
				user: user
			}
		})

	},

	attempt: async (state: Redux, username: string, password: string) => {
		const request = {
			user: {
				username,
				password
			}
		}

		const token: string = await API.post('session', request)

		if (!token) {
			throw new Error('Invalid Credentials')
		}
		else {
			setToken(token)
			const user: User = await API.get('session')

			Storage.set('session', token)

			store.setState({
				session: {
					active: true,
					ready: true,
					user: user
				}
			})
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
