import Pages from './pages'
import User from './data/user'
import Article from './data/article'
import {RouteComponentProps} from 'react-router'

export interface IRedux {
	core: {
		articles: Article[],
		loading: boolean
	},
	pages: Pages,
	website: {
		SITE_NAME: string
	},
	session: {
		active: boolean,
		ready: boolean,
		user: User | null
	}
}

export type Page = {
	data: any[],
	loaded: boolean
}

export default interface Connect extends IRedux, RouteComponentProps {

}
