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
		to: 'web',
		protected: true,
		children: [
			// News Articles
			{
				to: 'news',
				title: 'News Articles',
				about: 'You know what this is about',
				children: [
					// Create
					{
						to: 'create',
						title: 'News Articles - Create',
						about: 'Submit a new article',
						component: Pages.Website.News.Create
					},
					// Delete
					{
						to: 'delete/:id',
						title: 'News Articles - Delete',
						about: 'This will permanently remove this article',
						component: Pages.Website.News.Delete
					},
					// List
					{
						to: 'list',
						title: 'News Articles - List',
						about: 'Here is a list of the latest articles',
						component: Pages.Website.News.List
					},
					// View
					{
						to: 'view/:id',
						title: 'News Articles - View',
						about: 'Make changes directly here',
						component: Pages.Website.News.View
					},
				]
			}

		]
	}
]

export default Routes