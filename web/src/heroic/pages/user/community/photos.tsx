import React from 'react'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export default () => (
	<Container>
		<ContainerHeader>
			<SubHeader>
				<h2>Photos</h2>
				<p>Have a look at some of the great moments captured by bobbas.</p>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
		</ContainerContent>
	</Container>
)
