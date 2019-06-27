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
			}
		]
	}
]

export default routes

