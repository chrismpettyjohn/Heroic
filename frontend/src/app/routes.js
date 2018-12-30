import Pages from 'pages'

const Routes = [
	// Dashboard
	{
		to: 'dashboard',
		title: 'Dashboard',
		about: 'Welcome back',
		component: Pages.Dashboard,
		protected: true,
		sidebar: false
	},
	// Website
	{
		to: 'website',
		title: 'Website',
		about: 'Manage your site presence',
		component: Pages.Website,
		protected: true,
		sidebar: 'website'
	}
]

export default Routes