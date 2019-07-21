import {Props} from './'
import React from 'react'
import Card from 'heroic/components/base/card'
import UserCard from 'heroic/components/base/cards/user'

export default ({ article }: Props) => (
	<div style={{ overflow: 'none' }}>
		<Card header="Meet the Author">
			<UserCard user={article.user}/>
		</Card>
	</div>
)
