import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Card from 'heroic/components/base/card'
import UserList from 'heroic/components/base/list/user'
import SubHeader from 'heroic/components/layout/sub-header'
import {OnlineActions} from 'heroic/app/redux/actions/pages/community'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

class Staff extends PureComponent<Redux> {

	componentDidMount() {
		OnlineActions.init()
	}

	render() {
		const {data, loaded} = this.props.pages.community.online
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Online Users</h2>
						<p>Do these people ever sleep?</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<div className="heroic-photo-list">
						{
							!loaded
								? <p>Loading</p>
								: (
									<Card>
										<UserList box={false} users={data}/>
									</Card>
								)
						}
					</div>
				</ContainerContent>
			</Container>
		)
	}


}

export default Stateful(Staff)
