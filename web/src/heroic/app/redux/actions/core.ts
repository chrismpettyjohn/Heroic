import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'

export default bindActions(store => ({

	initialize: async () => {
		const articles = [
			{
				campaign: 'Campaigns & Activities',
				description: "There's a strange meteor headed straight for Habbo!  Begin investigating it here with Snauzher and UnderCover",
				title: 'Monster Plant Invasion',
				timestamp: 'Jun 20, 2019',
				image: 'lpromo_Monsterinvasion20Jun2019'
			},
			{
				campaign: 'Campaigns & Activities',
				description: "Our final competition before our next live event starts today! We would like to know which type of festival energy you're...",
				title: 'Festival Poster Competition',
				timestamp: 'Jun 17, 2019',
				image: 'lpromo_festiposter'
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
