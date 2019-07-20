import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import {API} from 'heroic/app/api'
import Room from 'heroic/app/interface/data/room'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Room[] = await API.get('rooms')

		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					rooms: {
						data: result,
						loaded: true
					}
				}
			}
		})
	}

}), Store)
