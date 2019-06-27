import User from '../user'
import Campaign from './campaign'

export default interface Article {
	id: number,
	author: User,
	campaign: Campaign,
	description: string,
	title: string,
	timestamp: string,
	image: string
}
