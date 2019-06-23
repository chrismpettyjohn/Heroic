import {Page} from '../index'
import User from 'heroic/app/interface/data/user'

export default interface Online extends Page {
	data: User[]
}
