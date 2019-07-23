import React from 'react'
import {Props} from '../profile'

export default ({ user }: Props) => (
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
)
