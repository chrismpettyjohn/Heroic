import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Rank from 'heroic/app/interface/data/rank'


export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Rank[] = [
			{
				id: 1,
				name: 'Developer',
				desc: 'Builds cool shit',
				users: [
					{
						id: 1,
						username: 'Chris',
						motto: 'Heroic 4 Rocks',
						avatar: 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110'
					}
				]
			}
		]
		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					staff: {
						data: result,
						loaded: true
					}
				}
			}
		})
	}

}), Store)
