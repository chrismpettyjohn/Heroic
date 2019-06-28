import Pages from 'heroic/pages'
import {EGuard,IParent} from 'heroic/app/interface/router'

const routes: Array<IParent> = [

	// Guest Routes
	{
		component: Pages.Guest.Master,
		guard: EGuard.Everyone,
		prefix: '',
		routes: [
			{
				component: Pages.Guest.Login,
				title: 'Login',
				path: 'login'
			},
			{
				component: Pages.Guest.Register,
				title: 'Register',
				path: 'register'
			}
		],
		meta: {

		}
	},

	// User Routes
	{
		// Home
		component: Pages.User.Master,
		guard: EGuard.User,
		meta: {
			group: 'home'
		},
		prefix: '',
		routes: [
			{
				component: Pages.User.Home.About,
				title: 'About',
				path: 'about'
			},
			{
				component: Pages.User.Home.Me,
				title: 'Home',
				path: 'me'
			},
			{
				component: Pages.User.Home.Profile,
				title: 'Profile',
				path: 'profile/:username?'
			},
			{
				component: Pages.User.Home.Settings,
				title: 'Account Settings',
				path: 'settings'
			},
			{
				component: Pages.User.Home.Logout,
				title: 'Logout',
				path: 'logout'
			}
		]
	},
	{
		// Community
		component: Pages.User.Master,
		guard: EGuard.User,
		meta: {
			group: 'community'
		},
		prefix: '',
		routes: [
			{
				component: Pages.User.Community.Photos,
				title: 'Photos',
				path: 'photos/:photo?'
			},
			{
				component: Pages.User.Community.Rooms,
				title: 'Rooms',
				path: 'rooms/:room?'
			},
			{
				component: Pages.User.Community.News,
				title: 'News',
				path: 'news/:article?'
			},
			{
				component: Pages.User.Community.Staff,
				title: 'Staff',
				path: 'staff'
			},
			{
				component: Pages.User.Community.Leaderboard,
				title: 'Leaderboard',
				path: 'leaderboard'
			},
			{
				component: Pages.User.Community.Online,
				title: 'Online',
				path: 'online'
			},
		]
	},
	// Hangout
	{
		component: Pages.User.Master,
		guard: EGuard.User,
		meta: {
			group: 'hangout'
		},
		prefix: 'hangout',
		routes: [
			{
				component: Pages.User.Hangout.List,
				title: 'Hangouts',
				path: ''
			},
			{
				component: Pages.User.Hangout.Item,
				title: 'Hangouts',
				path: ':post'
			}
		]
	},
	// Shop
	{
		component: Pages.User.Master,
		guard: EGuard.User,
		meta: {
			group: 'shop'
		},
		prefix: 'shop',
		routes: [
			{
				component: Pages.User.Shop.List,
				title: 'Shop',
				path: ''
			},
			{
				component: Pages.User.Shop.History,
				title: 'Shop - My History',
				path: 'history'
			},
			{
				component: Pages.User.Shop.Checkout,
				title: 'Shop - Checkout',
				path: 'checkout'
			}
		]
	},
]

export default routes

