import User from './user'

export default interface Guild {
	id: number
	user_id: number
	name: string
	description: string
	room_id: number
	user?: User
}
