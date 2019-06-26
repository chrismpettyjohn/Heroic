import User from './user'

export default interface Photo {
	id: number,
	user_id: number,
	room_id: number,
	timestamp: number,
	url: string,
	user: User
}
