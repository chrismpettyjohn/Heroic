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
				path: 'login'
			},
			{
				component: Pages.Guest.Register,
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
				path: 'me'
			},
			{
				component: Pages.User.Home.Logout,
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
				path: 'photos'
			},
			{
				component: Pages.User.Community.Rooms,
				path: 'rooms'
			},
			{
				component: Pages.User.Community.Staff,
				path: 'staff'
			},
			{
				component: Pages.User.Community.Leaderboard,
				path: 'leaderboard'
			},
			{
				component: Pages.User.Community.Online,
				path: 'online'
			}
		]
	}
]

export default routes

