import React from 'react'
import Components from './components'
import User from 'heroic/app/interface/data/user'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export interface Props {
	user: User
}

export default ({ user }: Props) => (
	<Container>
		<ContainerHeader>
			<Components.Header user={user}/>
		</ContainerHeader>
		<ContainerContent>
		</ContainerContent>
	</Container>
)
