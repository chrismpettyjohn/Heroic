import {IParent} from './interface/navigation'

const routes: Array<IParent> = [
	{
		group: 'home',
		icon: 'home',
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
	},
	{
		group: 'community',
		icon: 'community',
		text: 'Community',
		children: [
			{
				text: 'Photos',
				link: 'photos'
			},
			{
				text: 'Rooms',
				link: 'rooms'
			},
			{
				text: 'News',
				link: 'news'
			},
			{
				text: 'Staff',
				link: 'staff'
			},
			{
				text: 'Top Users',
				link: 'leaderboard'
			},
			{
				text: 'Online',
				link: 'online'
			}
		]
	}
]

export default routes
