import React from 'react'
import {Column} from 'heroic/components/layout/grid'
import Article from 'heroic/app/interface/data/article'

export default ({ campaign, description, title, timestamp, image }: Article) => (
	<Column size={12}>
		<div>
			<img src={`https://images.habbo.com/web_images/habbo-web-articles/${image}.png`} style={{ boxShadow: '3px 3px rgba(0,0,0,.3)' }}/>
		</div>
	</Column>
)
