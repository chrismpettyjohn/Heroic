import {Page} from '../'
import Article from 'heroic/app/interface/data/news/article'

export default interface News extends Page {
	data: Article[]
}
