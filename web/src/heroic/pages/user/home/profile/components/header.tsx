import React from 'react'
import {Props} from '../profile'
import SubHeader from 'heroic/components/layout/sub-header'

export default ({ user }: Props) => (
	<SubHeader>
		<div className="profile-info">
			<div>
				<div className="habbo-avatar" style={{ backgroundImage: `url(https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.avatar}&headonly=0&size=l&direction=2&head_direction=3&action=std&gesture=sml)` }}/>
			</div>
			<div className="user-info">
				<h2>{user.username}</h2>
				<p>{user.motto}</p>
			</div>
		</div>
	</SubHeader>
)
