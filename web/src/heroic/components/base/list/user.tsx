import React from 'react'
import User from 'heroic/app/interface/data/user'

interface Props {
	background?: boolean,
	box?: boolean,
	users: User[]
}

export default ({ background = true, box = true, users }: Props) => {
	let className = ''
	if (!background) className += 'no-bg '
	if (!box) className += 'no-box '

	return  (
		<ul className="user-list" style={{ width: '100%' }}>
			{
				users.map(user => (
					<li className={className} key={user.id}>
						<div>
							<div className="habbo-portrait" style={{ backgroundImage: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.avatar}&headonly=0&size=m&direction=4&head_direction=4&action=std&gesture=sml)` }}>
								<i className={!!user.online ? 'online' : 'offline'}/>
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
}
