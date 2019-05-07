import Pages from 'pages'
import {EExtends,EGuard,IParent} from 'app/interface/router'

const routes: Array<IParent> = [

	// Guest Routes
	{
		guard: EGuard.Everyone,
		extends: [EExtends.Header],
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
		]
	}

]

export default routes

