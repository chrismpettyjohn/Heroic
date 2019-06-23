import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import onClickOutside from 'react-onclickoutside'

class UserMenu extends Component {

	links = [
		{
			text: 'My Profile',
			link: 'profile'
		},
		{
			text: 'Logout',
			link: 'logout'
		}
	]

	state = {
		active: false
	}

	toggle = () => {
		this.setState({
			active: !this.state.active
		})
	}

	// Used by react-onclickoutside
	handleClickOutside = () => {
		if (this.state.active) {
			this.setState({
				active: false
			})
		}
	}

	render () {
		const {links} = this
		const {active} = this.state

		return (
			<div className={ active ? 'top-menu opened' : 'top-menu'}>
				<div className="user-menu" onClick={this.toggle}>
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
						{
							links.map(link => (
								<li key={link.link}>
									<Link to={link.link}>
										{link.text}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}

}

export default onClickOutside(UserMenu)
