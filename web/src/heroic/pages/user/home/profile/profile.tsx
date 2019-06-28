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
					<Column size={5}>
						<div className="heroic-profile heroic-profile-badges">
							<div className="box">
								<div className="box-container">
									<div className="container-header">
										Badges
									</div>
									<div className="grid-list across-3">
										<div className="grid-item">
											<div className="grid-image" style={{ backgroundImage: 'url(https://nitrots.co/assets/c_images/album1584/ADM.gif)' }}/>
											<div className="grid-text">ADM</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Column>
					<Column size={1}/>
					<Column size={5}>
						<div className="heroic-profile heroic-profile-friends">
							<div className="box">
								<div className="box-container">
									<div className="container-header">
										Friends
									</div>
									<div className="grid-list across-3">
										<div className="grid-item">
											<div className="grid-image" style={{ backgroundImage: 'url(https://nitrots.co/assets/c_images/album1584/ADM.gif)' }}/>
											<div className="grid-text">ADM</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Column>
				</Row>
				<Row>
					<Column size={5}>
						<div className="heroic-profile heroic-profile-rooms">
							<div className="box">
								<div className="box-container">
									<div className="container-header">
										Rooms
									</div>
									<div className="grid-list across-3">
										<div className="grid-item">
											<div className="grid-image" style={{ backgroundImage: 'url(https://nitrots.co/assets/c_images/album1584/ADM.gif)' }}/>
											<div className="grid-text">ADM</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Column>
					<Column size={1}/>
					<Column size={5}>
						<div className="heroic-profile heroic-profile-groups">
							<div className="box">
								<div className="box-container">
									<div className="container-header">
										Groups
									</div>
									<div className="grid-list across-3">
										<div className="grid-item">
											<div className="grid-image" style={{ backgroundImage: 'url(https://nitrots.co/assets/c_images/album1584/ADM.gif)' }}/>
											<div className="grid-text">ADM</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Column>
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
