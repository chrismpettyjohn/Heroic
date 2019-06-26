import React from 'react'

interface Props {
	action?: string,
	figure: string,
	gesture?: string,
	direction?: number,
	size?: 's' | 'm' | 'l',
	headonly?: number,
	headDirection?: number,
}

export const getSource = ({ action, direction = 4, figure = '', gesture = 'sm', headonly = 0, headDirection = 4, size }: Props): string => {
	let source = `https://www.habbo.com/habbo-imaging/avatarimage?figure=${figure}`
	source += `&size=${size}`
	source += `&headonly=${headonly}`
	source += `&direction=${direction}`
	source += `&head_direction=${headDirection}`
	source += `&action=${action}`
	source += `&gesture=${gesture}`
	return source
}

export default (props: Props) => {
	const source = getSource(props)
	return <img alt="user figure" src={source}/>
}
