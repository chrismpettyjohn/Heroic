import React from 'react'
import Primary from './primary'
import Navigation from './navigation'

interface Interface {
	group: string
}

export default ({ group }: Interface) => (
	<div className="heroic-header">
		<Primary/>
		<Navigation group={group}/>
	</div>
)
