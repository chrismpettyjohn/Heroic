import Room from './room'
import Guild from './guild'
import Badge from './badge'
import Friendship from './friendship'

export default interface User {
	id: number
	credits: number
	pixels: number
	points: number
	username: string
	motto: string
	look: string
	online: number
	account_created: number
	rooms?: Room[]
	guilds?: Guild[]
	badges?: Badge[]
	friendships?: Friendship[]
}
