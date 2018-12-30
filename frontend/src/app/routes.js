import Pages from 'pages'

const Routes = [
	// Dashboard
	{
		to: 'dashboard',
		title: 'Dashboard',
		about: 'Welcome back',
		component: Pages.Dashboard,
		protected: true
	}
]

export default Routes