import React from 'react'
import UserCard from './user'
import Room from 'heroic/app/interface/data/room'

interface Props {
	room: Room
}

export default ({room}: Props) => (
	<div>
		<div className="heroic-card h-100 no-margin">
			<div className="heroic-card-header">
				<span className="header">{room.name}</span>
				<span className="description">{room.description}</span>
			</div>
			<div className="heroic-card-content flex">
				<div>
					<div className="heroic-room-thumbnail" style={{ backgroundImage: `url(https://arcturus.pw/camera/Chris/thumbnail_${room.id}.png)` }}/>
				</div>
				<UserCard user={room.owner}/>
			</div>
		</div>
	</div>
)
