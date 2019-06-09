import React from 'react'
import Header from 'heroic/components/layout/header'

export default (props) => (
	<div className="h-100">
		<Header group={props.route.meta.group}/>
		<props.route.component/>
	</div>
)
