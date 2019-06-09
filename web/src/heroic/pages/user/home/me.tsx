import React from 'react'
import Alert from 'heroic/components/base/alert'
import {Column, Row} from 'heroic/components/layout/grid'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export default () => (
	<Container>
		<ContainerHeader>
			<SubHeader/>
		</ContainerHeader>
		<ContainerContent>
			<Row>
				<Column size={6}>
					<h4>Hotel Announcement</h4>
					<Alert color="danger">
						<p>We now use React, fuck all of ya'll.</p>
					</Alert>
				</Column>
				<Column size={6}>
				</Column>
			</Row>
		</ContainerContent>
	</Container>
)
