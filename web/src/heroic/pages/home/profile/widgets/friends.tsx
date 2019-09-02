import React from 'react'
import {Props} from '../profile'

export default ({ user }: Props) => (
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
											<div className="grid-image" style={{ backgroundImage: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${friendship.receiver!.look}&headonly=0&size=m&direction=2&head_direction=2)` }}/>
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
)
