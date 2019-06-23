import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Card from 'heroic/components/base/card'
import UserList from 'heroic/components/base/list/user'
import SubHeader from 'heroic/components/layout/sub-header'
import {LeaderboardActions} from 'heroic/app/redux/actions/pages/community'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

class Staff extends PureComponent<Redux> {

	componentDidMount() {
		LeaderboardActions.init()
	}

	render() {
		const {data, loaded} = this.props.pages.community.leaderboard
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Top Users</h2>
						<p>These users have a lot of time and aren't afraid to show it!</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<div className="heroic-staff-list">
						{
							!loaded
								? <p>Loading</p>
								: data.map(section => (
									<Card header={section.name} subheader={section.desc}>
										<UserList users={section.users}/>
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
