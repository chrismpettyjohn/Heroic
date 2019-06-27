import List from './list'
import Item from './item'
import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Room from 'heroic/app/interface/data/room'
import SubHeader from 'heroic/components/layout/sub-header'
import RoomActions from 'heroic/app/redux/actions/pages/community/rooms'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

interface Props extends Omit<Redux, 'match'> {
	match: {
		params: {
			room?: string
		}
	}
}

class Rooms extends PureComponent<Props> {

	componentDidMount () {
		RoomActions.init()
	}

	render () {
		const {room = '0'} = this.props.match.params
		const {data, loaded} = this.props.pages.community.rooms
		const active: Room | undefined = data.find(x => x.id === parseInt(room))
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Room</h2>
						<p>Have a look at some of the great rooms</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					{
						!loaded
							? <p>Loading</p>
							: !!active
							? <Item room={active!}/>
							: <List rooms={data}/>
					}
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(Rooms)
