import {API} from 'heroic/app/api'
import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Article from 'heroic/app/interface/data/news/article'

export default bindActions(store => ({

	init: async (state: Redux) => {
		const result: Article[] = await API.get('articles')
		store.setState({
			pages: {
				...state.pages,
				community: {
					...state.pages.community,
					news: {
						data: result,
						loaded: true
					}
				}
			}
		})
	}

}), Store)
