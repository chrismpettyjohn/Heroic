import React from 'react'
import Room from 'heroic/app/interface/data/room'

interface Props {
	room: Room
}

export default ({ room }: Props) => (
	<div>
		<h4>{room.name}</h4>
	</div>
)
