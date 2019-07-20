import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import {Section} from 'heroic/app/interface/pages/community/leaderboard'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Section[] = [
			{
				name: 'Most Credits',
				desc: '',
				users: [
					{
						id: 1,
						credits: 100,
						pixels: 100,
						points: 10,
						online: 1,
						username: 'Chris',
						motto: 'Heroic 4 Rocks',
						look: 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110',
						account_created: 1560056677
					}
				]
			}
		]

		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					leaderboard: {
						data: result,
						loaded: true
					}
				}
			}
		})

	}

}), Store)
