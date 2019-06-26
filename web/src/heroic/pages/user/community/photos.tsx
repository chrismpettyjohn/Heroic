import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import PhotoCard from 'heroic/components/base/cards/photo'
import SubHeader from 'heroic/components/layout/sub-header'
import PhotoActions from 'heroic/app/redux/actions/pages/community/photos'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

class Rooms extends PureComponent<Redux> {

	componentDidMount () {
		PhotoActions.init()
	}

	render () {
		const {data, loaded} = this.props.pages.community.photos
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Photos</h2>
						<p>Have a look at some of the great moments captured by bobbas.</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<div className="heroic-photo-list">
						{
							!loaded
								? <p>Loading</p>
								: data.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
						}
					</div>
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(Rooms)
