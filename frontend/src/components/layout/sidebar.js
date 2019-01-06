import React from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

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
				type: 'link',
				icon: 'newspaper',
				text: 'News Articles',
				link: '/web/news'
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
				linK: '/web/store'
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

	render () {
		const { items } = this
		return (
			<div className="m-grid__item m-aside-left m-aside-left--skin-dark" id="m_aside_left">
				<div className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark" id="m_ver_menu">
					<ul className="m-menu__nav">
						{(items.map((item, i) => {
							if (item.type==='link') {
								return (
									<li aria-haspopup="true" className="m-menu__item" key={i}>
										<a className="m-menu__link">
											<span className="m-menu__item-here">&nbsp;</span>
											<i className={`m-menu__link-icon fal fa-${item.icon}`}>&nbsp;</i>
											<span className="m-menu__link-text">{item.text}</span>
										</a>
								</li>
								)
							}
							else {
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

export default Sidebar