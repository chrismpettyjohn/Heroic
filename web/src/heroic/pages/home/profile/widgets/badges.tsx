import React from 'react'
import {Props} from '../profile'

export default ({ user }: Props) => (
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
											<div className="grid-image" style={{ backgroundImage: `url(https://www.habborator.org/badges/badges/${badge.badge_code}.gif)` }}/>
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
)
