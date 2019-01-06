import React from 'react'
import { Link } from 'react-router-dom'
import Outside from 'react-onclickoutside'

class Sidebar extends React.Component {

	state = {
		active: 0
	}

	componentWillMount () {
		this.items = [
			// Dashboard Label
			{
				type: 'label',
				text: 'Dashboard'
			},
			// Dashboard Link
			{
				type: 'link',
				icon: 'home',
				text: 'Dashboard',
				link: '/dashboard/home'
			},
			// Health Link
			{
				type: 'link',
				icon: 'medkit',
				text: 'Health',
				link: '/dashboard/health'
			},
			// Website Label
			{
				type: 'label',
				text: 'Website',
			},
			// News Link
			{
				type: 'dropdown',
				icon: 'newspaper',
				text: 'News Articles',
				children: [
					// List Articles
					{
						type: 'link',
						text: 'View All Articles',
						link: '/web/news/list'
					},
					// Submit New Post
					{
						type: 'link',
						text: 'Submit New Post',
						link: '/web/news/create'
					}
				]
			},
			// Hangouts Link
			{
				type: 'link',
				icon: 'pen-square',
				text: 'Hangouts',
				link: '/web/hangouts'
			},
			// Web Store
			{
				type: 'link',
				icon: 'credit-card',
				text: 'Web Store',
				link: '/web/store'
			},
			// Settings Link
			{
				type: 'link',
				icon: 'wrench',
				text: 'Configuration',
				link: '/web/config'
			},
			// Emulator Label
			{
				type: 'label',
				text: 'Arcturus'
			},
			// Users Link
			{
				type: 'link',
				icon: 'users',
				text: 'Users',
				link: '/emu/users'
			},
			// Logs Link
			{
				type: 'link',
				icon: 'history',
				text: 'Log History',
				link: '/emu/history'
			},
			// Catalog
			{
				type: 'link',
				icon: 'shopping-cart',
				text: 'Catalog',
				link: '/emu/catalog'
			}
		]
	}

	setActive = (id) => {
		if (this.state.active === id) {
			this.setState({
				active: 0
			})
		}
		else {
			this.setState({
				active: id
			})
		}
	}

	handleClickOutside = () => {
		if (this.state.active !== 0) {
			this.setState({
				active: 0
			})
		}
	}

	render () {
		const { items, setActive } = this
		const { active } = this.state
		return (
			<div className="m-grid__item m-aside-left m-aside-left--skin-dark" id="m_aside_left">
				<div className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark" id="m_ver_menu">
					<ul className="m-menu__nav">
						{(items.map((item, i) => {
							if (item.type === 'link') {
								return (
									<li aria-haspopup="true" className="m-menu__item" key={i}>
										<Link className="m-menu__link" to={item.link}>
											<span className="m-menu__item-here">&nbsp;</span>
											<i className={`m-menu__link-icon fal fa-${item.icon}`}>&nbsp;</i>
											<span className="m-menu__link-text">{item.text}</span>
										</Link>
								</li>
								)
							}
							else if (item.type === 'dropdown') {
								return (
									<li aria-haspopup="true" className={`m-menu__item m-menu__item--submenu ${(active===i) ? 'm-menu__item--open' : ''}`} key={i}>
										<div className="m-menu__link m-menu__toggle" onClick={() => { setActive(i) }}>
											<span className="m-menu__item-here"></span>
											<i className={`m-menu__link-icon fal fa-${item.icon}`}>&nbsp;</i>
											<span className="m-menu__link-text">{item.text}</span>
											<i className="m-menu__ver-arrow la la-angle-right"></i>
										</div>
										<div className="m-menu__submenu">
											<span className="m-menu__arrow"></span>
											<ul className="m-menu__subnav">
												{(item.children.map((child, n) => {
													return (
														<li aria-haspopup="true" className="m-menu__item" key={n}>
															<Link className="m-menu__link" to={child.link}>
																<i className="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i>
																<span className="m-menu__link-text">{child.text}</span>
															</Link>
														</li>
													)
												}))}
											</ul>
										</div>
									</li>
								)
							}
							else  {
								return (
									<li className="m-menu__section m-menu__section--first" key={i}>
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

export default Outside(Sidebar)