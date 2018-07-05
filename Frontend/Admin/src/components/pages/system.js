const index = {
	Parent: require('./system/parent').default,
	Dashboard: require('./system/dashboard').default,
	Errors: {
		Session: require('./system/errors/session').default
	},
	Session: {
		Login: require('./system/session/login').default
	}
}
export default index