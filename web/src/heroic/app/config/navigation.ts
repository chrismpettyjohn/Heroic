import {IParent} from 'heroic/app/interface/navigation'

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
		group: 'hangout',
		icon: 'comment',
		text: 'Hangouts',
		children: [
			{
				text: 'Latest Posts',
				link: 'hangout'
			}
		]
	},
	{
		group: 'shop',
		icon: 'shopping-cart',
		text: 'Shop',
		children: [
			{
				text: 'Buy',
				link: 'shop'
			},
			{
				text: 'My History',
				link: 'shop/history'
			}
		]
	}
]

export default routes
