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
		icon: 'user-friends',
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
	},
	{
		group: 'hangouts',
		icon: 'comment',
		text: 'Hangouts',
		children: [
			{
				text: 'Home',
				link: 'home'
			}
		]
	},
	{
		group: 'store',
		icon: 'shopping-cart',
		text: 'Store',
		children: [
			{
				text: 'Home',
				link: 'home'
			}
		]
	}
]

export default routes
