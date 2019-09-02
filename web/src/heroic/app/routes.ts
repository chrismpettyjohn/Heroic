import Pages from 'heroic/pages'
import {EGuard,IParent} from 'heroic/app/interface/router'

const routes: Array<IParent> = [

	// Guest Routes
	{
		component: Pages.GuestMaster,
		guard: EGuard.Everyone,
		prefix: '',
		routes: [
			{
				component: Pages.Auth.Login,
				title: 'Login',
				path: 'login'
			},
			{
				component: Pages.Auth.Register,
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
		component: Pages.UserMaster,
		guard: EGuard.User,
		meta: {
			group: 'home'
		},
		prefix: '',
		routes: [
			{
				component: Pages.Home.About,
				title: 'About',
				path: 'about'
			},
			{
				component: Pages.Home.Me,
				title: 'Home',
				path: 'me'
			},
			{
				component: Pages.Home.Profile,
				title: 'Profile',
				path: 'profile/:username?'
			},
			{
				component: Pages.Home.Settings,
				title: 'Account Settings',
				path: 'settings'
			},
			{
				component: Pages.Home.Logout,
				title: 'Logout',
				path: 'logout'
			}
		]
	},
	{
		// Community
		component: Pages.UserMaster,
		guard: EGuard.User,
		meta: {
			group: 'community'
		},
		prefix: '',
		routes: [
			{
				component: Pages.Community.Photos,
				title: 'Photos',
				path: 'photos/:photo?'
			},
			{
				component: Pages.Community.Rooms,
				title: 'Rooms',
				path: 'rooms/:room?'
			},
			{
				component: Pages.Community.News,
				title: 'News',
				path: 'news/:article?'
			},
			{
				component: Pages.Community.Staff,
				title: 'Staff',
				path: 'staff'
			},
			{
				component: Pages.Community.Leaderboard,
				title: 'Leaderboard',
				path: 'leaderboard'
			},
			{
				component: Pages.Community.Online,
				title: 'Online',
				path: 'online'
			},
		]
	},
	// Hangout
	{
		component: Pages.UserMaster,
		guard: EGuard.User,
		meta: {
			group: 'hangout'
		},
		prefix: 'hangout',
		routes: [
			{
				component: Pages.Hangout.List,
				title: 'Hangouts',
				path: ''
			},
			{
				component: Pages.Hangout.Item,
				title: 'Hangouts',
				path: ':post'
			}
		]
	},
	// Shop
	{
		component: Pages.UserMaster,
		guard: EGuard.User,
		meta: {
			group: 'shop'
		},
		prefix: 'shop',
		routes: [
			{
				component: Pages.Shop.List,
				title: 'Shop',
				path: ''
			},
			{
				component: Pages.Shop.History,
				title: 'Shop - My History',
				path: 'history'
			},
			{
				component: Pages.Shop.Checkout,
				title: 'Shop - Checkout',
				path: 'checkout'
			}
		]
	},
]

export default routes

