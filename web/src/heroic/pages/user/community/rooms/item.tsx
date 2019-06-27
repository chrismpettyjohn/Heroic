import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Connect from 'heroic/app/redux/stateful'
import IRoom from 'heroic/app/interface/data/room'
import SubHeader from 'heroic/components/layout/sub-header'
import RoomActions from 'heroic/app/redux/actions/pages/community/rooms'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

interface Props extends Omit<Redux, 'match'> {
	match: {
		params: {
			room: string
		}
	}
}

class Room extends PureComponent<Props> {

	componentDidMount () {
		RoomActions.init()
	}

	render () {
		const {room} = this.props.match.params
		const {data} = this.props.pages.community.rooms
		const query = data.find(x => x.id === parseInt(room))
		return query
			? <Display room={query}/>
			: <NotFound/>
	}

}

interface DisplayProps {
	room: IRoom
}
const Display = ({ room }: DisplayProps) => (
	<Container>
		<ContainerHeader>
			<SubHeader>
				<h2>{room.name}</h2>
				<p>{room.description}</p>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
		</ContainerContent>
	</Container>
)

const NotFound = () => (
	<Container>
		<ContainerHeader>
			<SubHeader>
				<h2>Room Not Found</h2>
				<p>BORK!</p>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
		</ContainerContent>
	</Container>
)

export default Connect(Room)
