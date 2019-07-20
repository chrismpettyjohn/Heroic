import React from 'react'
import UserCard from './user'
import IRoom from 'heroic/app/interface/data/room'
import {RouteComponentProps,withRouter} from 'react-router'

interface Props extends RouteComponentProps {
	room: IRoom
}

const Room = ({ history, room }: Props) => {
	const navigate = (): void => {
		history.push(`/rooms/${room.id}`)
	}
	return (
		<div>
			<div className="heroic-card h-100 no-margin">
				<div className="heroic-card-header">
					<span className="header">{room.name}</span>
					<span className="description">{room.description}</span>
				</div>
				<div className="heroic-card-content flex">
					<div>
						<div className="heroic-room-thumbnail" style={{ backgroundImage: `url(https://arcturus.pw/camera/Chris/thumbnail_${room.id}.png)` }} onClick={navigate}/>
					</div>
					<UserCard user={room.user}/>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Room)
