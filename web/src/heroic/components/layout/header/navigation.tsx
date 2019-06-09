import React from 'react'
import {Link} from 'react-router-dom'
import Routes from 'heroic/app/navigation'
import {withRouter} from 'react-router-dom'

interface Interface {
	group: string,
	match: {
		path: string
	}
}

const Navigation = ({ group, match }: Interface ) => {
	const currentGroup = Routes.find(x => x.group === group)
	const activeURL = match.path.substring(1)
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
					<Link className="hotel-button" to="/client">
						Hotel
						<small className="ml-2">0 Online</small>
						<i className="heroic-icon hotel"/>
					</Link>
				</div>
			</div>
			<div className="navigation-bottom">
				<div className="bottom-container">
					<ul>
						{
							currentGroup
								? currentGroup.children.map((route, i) => (
									<li className={ activeURL === route.link ? 'active' : '' } key={i}>
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

export default withRouter(Navigation)
