import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Room from 'heroic/app/interface/data/room'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Room[] = [
			{
				id: 1,
				name: 'Test',
				description: 'This is a test room',
				model: 'model_a',
				state: 'open',
				users: 5,
				users_max: 10,
				guild_id: 1,
				tags: 'test,hotel',
				is_public: 0,
				is_staff_picked: 0,
				owner: {
					id: 1,
					username: 'Chris',
					credits: 100,
					pixels: 100,
					points: 100,
					motto: 'I love Redux',
					look: '',
					online: 1,
					account_created: 1560056677
				}
			}
		]

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
