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
		component: Pages.User.Master,
		guard: EGuard.Everyone,
		meta: {
			group: 'home'
		},
		prefix: '',
		routes: [
			{
				component: Pages.User.Home.Me,
				path: 'me'
			}
		]
	}

]

export default routes

