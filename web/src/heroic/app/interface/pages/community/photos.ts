import {Page} from '../index'
import Photo from 'heroic/app/interface/data/photo'

export default interface Rooms extends Page {
	data: Photo[]
}
