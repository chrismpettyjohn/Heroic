import User from './user'

export default interface Friendship {
	id: number
	user_one_id: number
	user_two_id: number
	relation: number
	friends_since: number
	sender?: User
	receiver?: User
}
