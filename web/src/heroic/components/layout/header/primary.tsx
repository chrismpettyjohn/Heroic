import React from 'react'

export default () => (
	<div className="header-top">
		<div className="top-container">
			<div className="top-logo"/>
			<div className="top-menu">
				<div className="user-menu">
					<div className="menu-container">
						<i className="heroic-icon arrow"/>
						<div className="menu-username">
							LeChris
						</div>
					</div>
					<div>
						<div className="habbo-portrait" style={{ backgroundImage: 'url(https://www.habbo.com/habbo-imaging/avatarimage?figure=ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110&headonly=0&size=m&direction=4&head_direction=4&action=std&gesture=sml)'}}>
						</div>
					</div>
				</div>
				<div className="user-menu-list">
					<ul>
						<li>My Profile</li>
						<li>Logout</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)
