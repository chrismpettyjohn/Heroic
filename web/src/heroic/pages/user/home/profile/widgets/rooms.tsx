import React from 'react'
import {Props} from '../profile'

export default ({ user }: Props) => (
	<div className="heroic-profile heroic-profile-rooms">
		<div className="box">
			<div className="box-container">
				<div className="container-header">
					Rooms
				</div>
				{
					user.rooms!.length > 0
						? (
							<div className="grid-list across-3">
								{
									user.rooms!.map(room => (
										<div className="grid-item" key={room.id}>
											<div className="grid-image" style={{ backgroundImage: `url(https://arcturus.pw/camera/Chris/thumbnail_${room.id}.png)` }}/>
											<div className="grid-text">{room.name}</div>
										</div>
									))
								}
							</div>
						)
						: <p>I don't have any rooms</p>
				}
			</div>
		</div>
	</div>
)

