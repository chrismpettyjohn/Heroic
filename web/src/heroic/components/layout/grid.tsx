import React from 'react'

export const Row = props => (
	<div className="flex flex-row">
		{props.children}
	</div>
)

interface IColumn {
	children?: any,
	size: number
}
export const Column = (props: IColumn) => (
	<div className={`flex flex-column flex-${props.size} has-padding`}>
		{props.children}
	</div>
)
