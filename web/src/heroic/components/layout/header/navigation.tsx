import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Routes from 'heroic/app/config/navigation'

interface Interface {
	group: string,
	match: {
		path: string
	}
}

const Navigation = ({ group, match }: Interface ) => {
	const currentGroup = Routes.find(x => x.group === group)
	const activeURL = match.path.substring(1).split('/')[0]
	let route;
	return (
		<div className="header-navigation">
			<div className="navigation-top">
				<div className="top-container">
					<ul>
						{
							Routes.map((group, i) => {
								route = group.children[0]
								return (
									<li className={ currentGroup!.group === group.group ? 'active' : '' } key={i}>
										<Link to={`/${route.link}`}>
											<i className={`fa fa-${group.icon} mr-2`}/>
											{group.text}
										</Link>
									</li>
								)
							})
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
										<Link to={`/${route.link}`}>{route.text}</Link>
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
