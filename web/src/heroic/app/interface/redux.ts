import User from './data/user'
import Article from './data/article'
import {RouteComponentProps} from 'react-router-dom'

export default interface IRedux extends RouteComponentProps {
	core: {
		articles: Article[],
		loading: boolean
	},
	website: {
		SITE_NAME: string
	},
	session: {
		active: boolean,
		ready: boolean,
		user: User | null
	}
}
