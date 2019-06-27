import List from './list'
import Item from './item'
import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Photo from 'heroic/app/interface/data/photo'
import SubHeader from 'heroic/components/layout/sub-header'
import PhotoActions from 'heroic/app/redux/actions/pages/community/photos'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

interface Props extends Omit<Redux, 'match'> {
	match: {
		params: {
			photo?: string
		}
	}
}

class Rooms extends PureComponent<Props> {

	componentDidMount () {
		PhotoActions.init()
	}

	render () {
		const {photo = '0'} = this.props.match.params
		const {data, loaded} = this.props.pages.community.photos
		const active: Photo | undefined = data.find(x => x.id === parseInt(photo))
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Photos</h2>
						<p>Have a look at some of the great moments captured by bobbas.</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					{
						!loaded
							? <p>Loading</p>
							: !!active
							? <Item photo={active!}/>
							: <List photos={data}/>
					}
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(Rooms)
