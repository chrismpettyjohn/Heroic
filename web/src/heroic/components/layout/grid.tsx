import React from 'react'

export const Row = props => (
	<div className={`flex flex-row ${props.className}`}>
		{props.children}
	</div>
)

interface IColumn {
	children?: any,
	size: number,
	className?: string
}
export const Column = (props: IColumn) => (
	<div className={`flex flex-column flex-${props.size} has-padding ${props.className}`}>
		{props.children}
	</div>
)
