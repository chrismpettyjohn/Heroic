import React from 'react'
import Room from 'heroic/app/interface/data/room'
import RoomCard from 'heroic/components/base/cards/room'

interface Props {
	rooms: Room[]
}

export default ({ rooms }: Props) => (
	<div className="heroic-room-list">
		{
			rooms.map(room => <RoomCard key={room.id} room={room}/>)
		}
	</div>
)
