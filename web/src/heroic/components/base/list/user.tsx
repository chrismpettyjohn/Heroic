import React from 'react'
import User from 'heroic/app/interface/data/user'

interface Props {
	users: User[]
}

export default ({ users }: Props) => (
	<ul className="user-list">
		{
			users.map(user => (
				<li className="no-bg no-box">
					<div>
						<div className="habbo-portrait" style={{ backgroundImage: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.avatar}&headonly=0&size=m&direction=4&head_direction=4&action=std&gesture=sml)` }}>
							<i className="offline"/>
						</div>
					</div>
					<div className="user-info">
						<span className="username">{user.username}</span>
						<span className="motto">{user.motto}</span>
					</div>
					<div className="user-info-extended"/>
				</li>
			))
		}
	</ul>
)
