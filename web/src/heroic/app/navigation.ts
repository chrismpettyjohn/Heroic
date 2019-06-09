import {IParent} from './interface/navigation'

const routes: Array<IParent> = [
	{
		group: 'home',
		icon: 'community',
		text: 'Home',
		children: [
			{
				text: 'Home',
				link: 'me'
			},
			{
				text: 'Profile',
				link: 'profile'
			},
			{
				text: 'Account Settings',
				link: 'settings'
			}
		]
	}
]

export default routes
