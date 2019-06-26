import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import RoomCard from 'heroic/components/base/cards/room'
import RoomActions from 'heroic/app/redux/actions/pages/community/rooms'
import Container, {ContainerContent, ContainerHeader} from "../../../components/layout/container";
import SubHeader from "../../../components/layout/sub-header";

class Rooms extends PureComponent<Redux> {

	componentDidMount () {
		RoomActions.init()
	}

	render () {
		const {data, loaded} = this.props.pages.community.rooms
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Room Gallery</h2>
						<p>Check out some of the most popular rooms</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<div className="heroic-room-list">
						{
							!loaded
								? <p>Loading</p>
								: data.map(room => <RoomCard key={room.id} room={room}/>)
						}
					</div>
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(Rooms)
