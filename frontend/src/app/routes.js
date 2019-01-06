import Pages from 'pages'

const Routes = [
	// Dashboard
	{
		to: 'dashboard',
		protected: true,
		children: [
			// Home
			{
				to: 'home',
				title: 'Dashboard',
				about: 'Welcome Back',
				component: Pages.Dashboard
			}
			// Health
		]
	},
	// Website
	{
		to: 'website',
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