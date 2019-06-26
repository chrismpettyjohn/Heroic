import React from 'react'
import User from 'heroic/app/interface/data/user'
import Portrait  from 'heroic/components/base/portrait'

interface Props {
	user: User
}

export default ({ user }: Props) => (
	<ul className="user-list">
		<li className="no-bg no-box">
			<div>
				<Portrait user={user}/>
			</div>
			<div className="user-info">
				<span className="username">{user.username}</span>
				<span className="motto">{user.motto}</span>
			</div>
			<div className="user-info-extended"/>
		</li>
	</ul>
)
