import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Photo from 'heroic/app/interface/data/photo'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Photo[] = [
			{
				id: 1,
				user_id: 1,
				room_id: 1,
				timestamp: + new Date(),
				url: 'https://ngh-camera.storage.googleapis.com/77029a92-0a5d-4e62-bb6f-a2aa94d0c65f.png',
				user: {
					id: 1,
					username: 'Chris',
					credits: 100,
					pixels: 100,
					points: 100,
					motto: 'I love Redux',
					avatar: '',
					online: 1
				}
			}
		]

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
