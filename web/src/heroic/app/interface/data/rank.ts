import User from './user'

export default interface Rank {
	id: number
	rank_name: string
	rank_desc: string
	rank_type: 'user' | 'vip' | 'staff' | 'hidden'
	rank_badge: string
	users: User[]
}
