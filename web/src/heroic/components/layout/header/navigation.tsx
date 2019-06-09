import React from 'react'
import {Link} from 'react-router-dom'
import Routes from 'heroic/app/navigation'

interface Interface {
	group: string
}

export default ({ group }: Interface ) => {
	const currentGroup = Routes.find(x => x.group === group)
	return (
		<div className="header-navigation">
			<div className="navigation-top">
				<div className="top-container">
					<ul>
						{
							Routes.map((group, i) => (
								<li key={i}>
									<i className={`heroic-icon ${group.icon}`}/>
									{group.text}
								</li>
							))
						}
					</ul>
					<a className="hotel-button">
						Hotel
						<small className="ml-2">0 Online</small>
						<i className="heroic-icon hotel"/>
					</a>
				</div>
			</div>
			<div className="navigation-bottom">
				<div className="bottom-container">
					<ul>
						{
							currentGroup
								? currentGroup.children.map((route, i) => (
									<li key={i}>
										<Link to={route.link}>{route.text}</Link>
									</li>
								))
								: null
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

