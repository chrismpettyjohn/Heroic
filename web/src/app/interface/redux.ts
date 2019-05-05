export default interface IRedux {
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
