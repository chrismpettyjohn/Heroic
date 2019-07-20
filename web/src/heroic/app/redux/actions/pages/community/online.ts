import {API} from 'heroic/app/api'
import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import User from 'heroic/app/interface/data/user'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: User[] = await API.get('users/online')

		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					online: {
						data: result,
						loaded: true
					}
				}
			}
		})

	}

}), Store)
