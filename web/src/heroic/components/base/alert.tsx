import React from 'react'

interface Interface {
	color: 'danger' | 'primary',
	children: any
}

export default (props: Interface) => (
	<div className={`alert alert-${props.color}`}>
		{props.children}
	</div>
)
