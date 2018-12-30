import createStore from 'redux-zero'

export default createStore({
	route: {
		title: 'Valor',
		about: 'Welcome back'
	},
	session: {
		ready: true,
		active: true,
		user: {
			username: 'Chris'
		}
	}
})
