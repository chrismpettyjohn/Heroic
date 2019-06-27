import React from 'react'
import Card from 'heroic/components/base/card'
import User from 'heroic/app/interface/data/user'
import UserCard from 'heroic/components/base/cards/user'
import {Column, Row} from 'heroic/components/layout/grid'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

const base = {
	id: 0,
	credits: 0,
	pixels: 0,
	points: 0,
	online: 0,
	account_created: + new Date()
}

const developers: User[] = [
	{
		username: 'LeChris',
		motto: 'Lead Maintainer',
		avatar: 'hr-893-42.hd-209-1.ch-210-1408.lg-3023-1408.ca-3423-1408-85%2Cs-2.g-1.d-2.h-2.a-0%2C9e19dbddafefbfd86940b5acfbca368a',
		...base
	},
	{
		username: 'billsonnn',
		motto: 'UI Designer',
		avatar: 'hr-3090-35.hd-180-1.ch-3321-64.lg-3626-64-64.he-3681-64-81%2Cs-0.g-1.d-2.h-2.a-0%2C5a375d9f2925b491237b309ed1be5f3b',
		...base
	}
]

export default () => (
	<Container>
		<ContainerHeader>
			<SubHeader>
				<h2>Heroic</h2>
				<p>A breathe of fresh air as we step out of the stone age</p>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
			<Row>
				<Column size={5}>
					<h4>Developers</h4>
					<Card>
						{
							developers.map((user: User, i: number) => <UserCard key={i} user={user}/>)
						}
					</Card>
				</Column>
				<Column size={1}/>
				<Column size={5}>
					<h4>Sponsored Project</h4>
					<Card>
						<div style={{ display: 'block' }}>
							<h4>Cyclone</h4>
							<p>Cyclone is a HTML5 1:1 clone of Habbo</p>
						</div>
					</Card>
				</Column>
			</Row>
		</ContainerContent>
	</Container>
)
