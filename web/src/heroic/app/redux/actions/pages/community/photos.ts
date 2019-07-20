import {API} from 'heroic/app/api'
import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Photo from 'heroic/app/interface/data/photo'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Photo[] = await API.get('camera')

		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					photos: {
						data: result,
						loaded: true
					}
				}
			}
		})
	}

}), Store)
