import React from 'react'
import {RouteComponentProps,withRouter} from 'react-router'
import IArticle from 'heroic/app/interface/data/news/article'

interface Props extends RouteComponentProps{
	article: IArticle
}

const Photo =  ({ article, history }: Props) => {
	const onClick = () => {
		history.push(`/news/${article.id}`)
	}
	return (
		<div className="article">
			<img alt={`${article.title} image`}src={`/img/news/${article.image}_thumb.png`} onClick={onClick}/>
				<h3>{article.title}</h3>
				<p>{article.description}</p>
		</div>
	)
}

export default withRouter(Photo)
