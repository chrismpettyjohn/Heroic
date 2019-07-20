import React from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import Alert from 'heroic/components/base/alert'
import {Column, Row} from 'heroic/components/layout/grid'
import SubHeader from 'heroic/components/layout/sub-header'
import {AvatarComponent} from 'heroic/components/base/portrait'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

const Me = ({ session: { user } }: Redux ) => (
	<Container>
		<ContainerHeader>
			<SubHeader>
			<div className="profile-info">
				<div>
					<AvatarComponent user={user!}/>
				</div>
				<div className="user-info">
					<h2>{user!.username}</h2>
					<p>{user!.motto}</p>
				</div>
			</div>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
			<Row>
				<Column size={6}>
					<h4>Hotel Announcement</h4>
					<Alert color="danger" header="Help us with development">
						<p>We now use React, fuck all of ya'll.</p>
					</Alert>
				</Column>
			</Row>
		</ContainerContent>
	</Container>
)

export default Stateful(Me)
