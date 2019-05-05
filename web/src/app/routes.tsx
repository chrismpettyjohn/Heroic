import Pages from 'pages'

export default [

	//  Guest
	{
		parent: true,
		prefix: '',
		extends: [],
		guard: 'guest',
		children: [
			{
				path: 'login',
				title: 'Login',
				component: Pages.Guest.Login
			}
		]
	}
]


