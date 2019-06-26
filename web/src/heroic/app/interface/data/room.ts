import User from './user'

export default interface Room {
	id: number,
	name: string,
	description: string,
	model: string,
	state: 'open' | 'locked' | 'password' | 'invisible',
	users: number,
	users_max: number,
	guild_id: number,
	tags: string,
	is_public: number,
	is_staff_picked: number,
	owner: User
}
