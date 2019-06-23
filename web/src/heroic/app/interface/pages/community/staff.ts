import {Page} from '../index'
import Rank from 'heroic/app/interface/data/rank'

export default interface Staff extends Page {
	data: Rank[]
}
