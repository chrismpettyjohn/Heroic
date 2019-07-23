import React from 'react'
import Moment from 'moment'
import Widgets from './widgets'
import Components from './components'
import User from 'heroic/app/interface/data/user'
import {Column, Row} from 'heroic/components/layout/grid'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export interface Props {
	user: User
}

const widgets: any[] = [
	Widgets.Badges,
	Widgets.Friends,
	Widgets.Rooms,
	Widgets.Groups
]

export default ({ user }: Props) => {
	const date = Moment(user.account_created).format('MMMM DD, YYYY')
	return (
		<Container>
			<ContainerHeader>
				<Components.Header user={user}/>
			</ContainerHeader>
			<ContainerContent className="heroic-same-size-master">
				<Row className="heroic-profile-row">
					{
						widgets.map((Widget, i) => {
							return (
								<Column className="heroic-profile-column" key={i} size={5}>
									<Widget user={user}/>
								</Column>
							)
						})
					}
				</Row>
				<Row>
					<Column size={4}/>
					<Column size={4}>
						<div className="text-center heroic-profile-join">
							<h4>Joined On {date}</h4>
							<div>
								<i className="heroic-icon heart"/>
								<i className="heroic-icon heart"/>
								<i className="heroic-icon heart"/>
							</div>
						</div>
					</Column>
				</Row>
			</ContainerContent>
		</Container>
	)

}
