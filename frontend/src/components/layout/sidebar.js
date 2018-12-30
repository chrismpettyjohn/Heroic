import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

	state = {
		active: [],
		base: {
			// Website
			website: [
				// Heroic Management Label
				{
					type: 'label',
					text: 'Heroic Management'
				},
				// News Articles
				{
					type: 'link',
					text: 'News Articles',
					link: 'website/news'
				},
				// Web Shop
				{
					type: 'link',
					text: 'Manage Web Shop',
					link: 'website/shop'
				},
				// Payment Settings
				{
					type: 'link',
					text: 'Payment Settings',
					link: 'website/payments'
				},
				// Advanced Label
				{
					type: 'label',
					text: 'Advanced'
				},
				// Heroic Configuration
				{
					type: 'link',
					text: 'Heroic Configuration',
					link: 'website/configuration'
				},
				// Maintenance Mode
				{
					type: 'link',
					text: 'Maintenance Mode',
					link: 'website/maintenance'
				}
			]
		}
	}

	componentWillMount () {
		const use = this.props.use
		const base = this.state.base
		if (base[use]) {
			this.setState({
				active: base[use]
			})
		}
	}

	render () {
		const active = this.state.active
		return (
			<div className="m-grid__item m-aside-left">
				<div className="m-aside-menu m-aside-menu--skin-light m-aside-menu--submenu-skin-light" id="m_ver_menu">
					<ul className="m-menu__nav m-menu__nav--dropdown-submenu-arrow">
						{( active.map((item, i) => {
							if (item.type === 'link') {
								return (
									<li key={i} className="m-menu__item">
										<Link className="m-menu__link" to={item.link}>
											<i className="m-menu__link-bullet m-menu__link-bullet--dot"><span>&nbsp;</span></i>
											<span className="m-menu__link-text">{item.text}</span>
										</Link>
									</li>
								)
							}
							else {
								return (
									<li key={i} className="m-menu__section m-menu__section--first">
										<h4 className="m-menu__section-text">{item.text}</h4>
									</li>
								)
							}
						}))}
					</ul>
				</div>
			</div>
		)
	}

}

export default Sidebar