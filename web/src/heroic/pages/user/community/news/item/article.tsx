import {Props} from './'
import React from 'react'

export default ({ article }: Props) => (
	<div className="article">
		<img alt={article.image} src={`/images/news/${article.image}.png`}/>
		<h3>{article.title}</h3>
		<p>{article.content}</p>
	</div>
)
