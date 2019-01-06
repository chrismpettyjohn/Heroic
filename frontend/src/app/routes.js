import Pages from 'pages'

const Routes = [
	// Dashboard
	{
		to: 'dashboard',
		title: 'Dashboard',
		about: 'Welcome back',
		component: Pages.Dashboard,
		protected: true,
	},
	// Website
	{
		to: 'website',
		title: 'Website',
		about: 'Manage your site presence',
		protected: true,
		children: [
			// News Articles
			{
				to: 'news',
				title: 'News Articles',
				about: 'You know what this is about',
				children: [
					// Create
					// View Individual
					// View List
					{
						to: 'list',
						title: 'News Articles - List',
						about: 'Issa list',
						component: Pages.Website.News.List
					}
				]
			}

		]
	}
]

export default Routes