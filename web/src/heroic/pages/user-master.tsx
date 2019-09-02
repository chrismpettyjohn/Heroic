import React from 'react'
import Header from 'heroic/components/layout/header'
import Footer from 'heroic/components/layout/footer'

export default (props) => (
	<div className="h-100">
		<Header group={props.route.meta.group}/>
		<props.route.component/>
		<Footer/>
	</div>
)
