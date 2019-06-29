import React from 'react'
import Room from 'heroic/app/interface/data/room'
import {Column, Row} from 'heroic/components/layout/grid'
import Portrait  from 'heroic/components/base/portrait'
import Card from 'heroic/components/base/card'

interface Props {
	room: Room
}

export default ({ room }: Props) => (
	<div>
		<Row className="mb-5">
			<Column className="mr-4" size={1}>
				<div className="heroic-room-thumbnail" style={{ backgroundImage: `url(https://arcturus.pw/camera/Chris/thumbnail_${room.id}.png)` }}/>
			</Column>
			<Column size={6}>
				<h2 className="mb-3">{room.name}</h2>
				<Row>
					<Portrait user={room.owner}/>
					<h5 className="ml-2 mt-3">{room.owner.username}</h5>
				</Row>
			</Column>
		</Row>
		<Row>
			<Column className="mr-4" size={1}/>
			<Column size={6}>
				<Row>
					<h4 className="mr-2">Description</h4>
					<p>{room.description}</p>
				</Row>
				<Row>
					<h4 className="mr-2">Tags</h4>
					{
						room.tags.split(',').map((tag, i) => (
							<div className="mr-1" key={i}>
								{tag},
							</div>
						))
					}
				</Row>
			</Column>
			<Column size={4}>
				<Card header="Room Details">
					<p>Max Users: {room.users_max}</p>
				</Card>
			</Column>
		</Row>
	</div>
)
