import User from '../user'
import Campaign from './campaign'

export default interface Article {
	id: number,
	user: User,
	campaign: Campaign,
	description: string,
	title: string,
	timestamp: string,
	image: string
	content: string
}
