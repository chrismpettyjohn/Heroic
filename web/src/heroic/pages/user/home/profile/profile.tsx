import React from 'react'
import Moment from 'moment'
import Components from './components'
import User from 'heroic/app/interface/data/user'
import {Column, Row} from 'heroic/components/layout/grid'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export interface Props {
	user: User
}

export default ({ user }: Props) => {
	const date = Moment(user.account_created).format('MMMM DD, YYYY')
	return (
		<Container>
			<ContainerHeader>
				<Components.Header user={user}/>
			</ContainerHeader>
			<ContainerContent>
				<Row>
					<Column size={4}/>
					<Column size={4}>
						<div className="text-center">
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
