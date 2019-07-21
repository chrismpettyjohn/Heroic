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
									{
										user.badges!.length > 0
											? (
												<div className="grid-list across-3">
													{
														user.badges!.map(badge => (
															<div className="grid-item" key={badge.id}>
																<div className="grid-image" style={{ backgroundImage: `url(https://nitrots.co/assets/c_images/album1584/${badge.badge_code}gif)` }}/>
																<div className="grid-text">{badge.badge_code}</div>
															</div>
														))
													}
												</div>
											)
											: <p>I don't have any badges</p>
									}
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
									{
										user.friendships!.length > 0
											? (
												<div className="grid-list across-3">
													{
														user.friendships!.map(friendship => (
															<div className="grid-item" key={friendship.id}>
																<div className="grid-image" style={{ backgroundImage: `url(https://nitrots.co/assets/c_images/album1584/${friendship.id}gif)` }}/>
																<div className="grid-text">{friendship.receiver!.username}</div>
															</div>
														))
													}
												</div>
											)
											: <p>I don't have any friends</p>
									}
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
									{
										user.rooms!.length > 0
											? (
												<div className="grid-list across-3">
													{
														user.rooms!.map(room => (
															<div className="grid-item" key={room.id}>
																<div className="grid-image" style={{ backgroundImage: `url(https://nitrots.co/assets/c_images/album1584/${room.id}gif)` }}/>
																<div className="grid-text">{room.name}</div>
															</div>
														))
													}
												</div>
											)
											: <p>I don't have any rooms</p>
									}
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
									{
										user.guilds!.length > 0
											? (
												<div className="grid-list across-3">
													{
														user.guilds!.map(guild => (
															<div className="grid-item" key={guild.id}>
																<div className="grid-image" style={{ backgroundImage: `url(https://nitrots.co/assets/c_images/album1584/${guild.id}gif)` }}/>
																<div className="grid-text">{guild.name}</div>
															</div>
														))
													}
												</div>
											)
											: <p>I don't belong to any guilds</p>
									}
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
