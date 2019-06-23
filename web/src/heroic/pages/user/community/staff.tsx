import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Card from 'heroic/components/base/card'
import UserList from 'heroic/components/base/list/user'
import SubHeader from 'heroic/components/layout/sub-header'
import {StaffActions} from 'heroic/app/redux/actions/pages/community'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

class Staff extends PureComponent<Redux> {

	componentDidMount() {
		StaffActions.init()
	}

	render() {
		const {data, loaded} = this.props.pages.community.staff
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Our Team</h2>
						<p>These users help keep the place running and make sure our users are safe!</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<div className="heroic-staff-list">
						{
							!loaded
								? <p>Loading</p>
								: data.map(rank => (
									<Card header={rank.name} subheader={rank.desc}>
										<UserList background={false} box={false} users={rank.users}/>
									</Card>
								))
						}
					</div>
				</ContainerContent>
			</Container>
		)
	}


}

export default Stateful(Staff)
