import {API} from 'heroic/app/api'
import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import User from 'heroic/app/interface/data/user'
import {Section} from 'heroic/app/interface/pages/community/leaderboard'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Record<string, User[]> = await API.get('users/leaderboard')
		const sections: Section[] = [
			{
				name: 'Most Credits',
				desc: '',
				users: result.credits
			},
			{
				name: 'Most Pixels',
				desc: '',
				users: result.pixels
			},
			{
				name: 'Most Points',
				desc: '',
				users: result.points
			}
		]

		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					leaderboard: {
						data: sections,
						loaded: true
					}
				}
			}
		})

	}

}), Store)
