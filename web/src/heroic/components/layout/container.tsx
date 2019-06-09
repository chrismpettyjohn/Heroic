import React from 'react'

export default (props) => (
	<div className="heroic-container">
		{props.children}
	</div>
)

export const ContainerHeader = props => (
	<div className="container-header">
		{props.children}
	</div>
)

export const ContainerContent = props => (
	<div className="container-content">
		{props.children}
	</div>
)
