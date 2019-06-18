import {RouteComponentProps} from 'react-router-dom'

export default interface IRedux extends RouteComponentProps {
	website: {
		SITE_NAME: string
	},
	session: {
		active: boolean,
		ready: boolean,
		user: {
			username: string,
			motto: string
		}
	}
}
