import React from 'react'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export default () => (
	<Container>
		<ContainerHeader>
			<SubHeader>
				<h2>Hangouts</h2>
				<p>Find out what the community us up to</p>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
		</ContainerContent>
	</Container>
)
