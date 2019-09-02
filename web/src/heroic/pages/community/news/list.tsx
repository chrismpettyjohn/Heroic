import React from 'react'
import Card from 'heroic/components/base/cards/article'
import Article from 'heroic/app/interface/data/news/article'

interface Props {
	articles: Article[]
}

export default ({ articles }: Props) => (
	<div className="flex flex-row flex-wrap">
	{
			articles.map((article: Article) => (
				<div className="flex flex-6 has-margin" key={article.id}>
					<Card article={article}/>
				</div>
			))
		}
	</div>
)
