import React from 'react'
import Card from './card'
import Main from './main'
import {Row} from 'heroic/components/layout/grid'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Article from 'heroic/app/interface/data/article'

const News = ({ core: { articles } }: Redux) => (
	<Row>
		{
			articles.map( (article: Article, i: number) => {
				return i === 0
					? <Main key={i} {...article}/>
					: <Card key={i} {...article}/>
			})
		}
	</Row>
)


export default Stateful(News)
