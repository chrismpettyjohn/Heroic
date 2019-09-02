import React, {PureComponent} from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import {Column, Row} from 'heroic/components/layout/grid'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

class Settings extends PureComponent<Redux> {

	render () {
		return (
			<Container>
				<ContainerHeader>
					<SubHeader>
						<h2>Settings</h2>
						<p>Manage your credentials and privacy settings</p>
					</SubHeader>
				</ContainerHeader>
				<ContainerContent>
					<Row>
						<Column size={6}>
							<h4>Coming soon</h4>
						</Column>
					</Row>
				</ContainerContent>
			</Container>
		)
	}

}

export default Stateful(Settings)
