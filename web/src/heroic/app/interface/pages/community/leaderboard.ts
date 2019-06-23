import {Page} from '../index'
import User from 'heroic/app/interface/data/user'

export default interface Leaderboard extends Page {
	data: Section[]
}

export interface Section {
	name: string,
	desc: string,
	users: User[]
}
