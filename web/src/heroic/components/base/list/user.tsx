import React from 'react'
import User from 'heroic/app/interface/data/user'
import Portrait from 'heroic/components/base/portrait'

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
							<Portrait user={user}/>
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
