import React from 'react'
import News from 'heroic/components/base/news'
import Card from 'heroic/components/base/card'
import Alert from 'heroic/components/base/alert'
import {Column, Row} from 'heroic/components/layout/grid'
import SubHeader from 'heroic/components/layout/sub-header'
import Container, {ContainerContent, ContainerHeader} from 'heroic/components/layout/container'

export default () => (
	<Container>
		<ContainerHeader>
			<SubHeader  >
			<div className="profile-info">
				<div>
					<div className="habbo-avatar" style={{ backgroundImage: 'url(https://www.habbo.com/habbo-imaging/avatarimage?figure=ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110&headonly=0&size=l&direction=2&head_direction=3&action=std&gesture=sml)'}}/>
				</div>
				<div className="user-info">
					<h2>LeChris</h2>
					<p>We love Chris</p>
				</div>
			</div>
			</SubHeader>
		</ContainerHeader>
		<ContainerContent>
			<Row>
				<Column size={5}>
					<h4>Hotel Announcement</h4>
					<Alert color="danger" header="Help us with development">
						<p>We now use React, fuck all of ya'll.</p>
					</Alert>
					<News/>
				</Column>
				<Column size={2}/>
				<Column size={4}>
					<Card header="Heroic Rules" subheader="RevCMS suxx">
						<p>It's true</p>
					</Card>
				</Column>
			</Row>
		</ContainerContent>
	</Container>
)
