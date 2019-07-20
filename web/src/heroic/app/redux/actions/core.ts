import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import User from 'heroic/app/interface/data/user'

const user: User = {
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

export default bindActions(store => ({

	initialize: async () => {
		const articles = [
			{
				id: 1,
				campaign: {
					name: 'Campaigns & Activities'
				},
				description: "There's a strange meteor headed straight for Habbo!  Begin investigating it here with Snauzher and UnderCover",
				title: 'Monster Plant Invasion',
				timestamp: 'Jun 20, 2019',
				image: 'lpromo_Monsterinvasion20Jun2019',
				author: user
			},
			{
				id: 2,
				campaign: {
					name: 'Campaigns & Activities'
				},
				description: "Our final competition before our next live event starts today! We would like to know which type of festival energy you're...",
				title: 'Festival Poster Competition',
				timestamp: 'Jun 17, 2019',
				image: 'lpromo_festiposter',
				author: user
			}
		]

		store.setState({
			core: {
				articles: articles,
				loading: false
			}
		})
	}

}), Store)
