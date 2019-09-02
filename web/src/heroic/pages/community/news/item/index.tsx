import React from 'react'
import Author from './author'
import Article from './article'
import Comments from './comments'
import {Column, Row} from 'heroic/components/layout/grid'
import ArticleData from 'heroic/app/interface/data/news/article'
import {ContainerContent} from 'heroic/components/layout/container'

export interface Props {
	article: ArticleData
}

export default ({ article }: Props) => (
	<ContainerContent>
		<Row>
			<Column size={8}>
				<Article article={article}/>
			</Column>
			<Column size={4}>
				<Author article={article}/>
			</Column>
		</Row>
		<Row>
			<Column size={8}>
				<Comments article={article}/>
			</Column>
		</Row>
	</ContainerContent>
)

