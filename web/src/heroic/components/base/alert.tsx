import React from 'react'

interface Interface {
	color: 'danger' | 'primary',
	children?: any,
	header?: string
}

export default ({ color, children, header }: Interface) => (
	<div className={`alert alert-${color}`}>
		{
			header
				? <h3>header</h3>
				: null
		}
		{children}
	</div>
)
