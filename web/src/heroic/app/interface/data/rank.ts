import User from './user'

export default interface Rank {
	id: number,
	name: string,
	desc: string,
	users: User[]
}
