import React from 'react'
import {Column} from 'heroic/components/layout/grid'
import Article from 'heroic/app/interface/data/article'

export default ({ campaign, description, title, timestamp, image }: Article) => (
	<Column size={6}>
		<div>
			<img src={`https://images.habbo.com/web_images/habbo-web-articles/${image}_thumb.png`}/>
		</div>
	</Column>
)
