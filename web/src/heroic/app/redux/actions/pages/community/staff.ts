import {API} from 'heroic/app/api'
import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Rank from 'heroic/app/interface/data/rank'


export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Rank[] = await API.get('permissions')
		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					staff: {
						data: result.filter(x => x.rank_type === 'staff'),
						loaded: true
					}
				}
			}
		})
	}

}), Store)
