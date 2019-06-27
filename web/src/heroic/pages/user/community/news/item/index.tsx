import React from 'react'
import Article from 'heroic/app/interface/data/news/article'

interface Props {
	article: Article
}

export default ({ article }: Props) => (
	<div>
		{article.title}
	</div>
)

