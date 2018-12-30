import React from 'react'
import { withRouter, Link } from 'react-router-dom'

class Header extends React.Component {

	componentWillMount () {
		this.items = [
			// Dashboard
			{
				link: '/dashboard',
				title: 'Dashboard'
			},
			// Website
			{
				link: '/website',
				title: 'Website'
			},
			// Emulator
			{
				link: '/emulator',
				title: 'Emulator'
			},
			// Other
			{
				link: '/other',
				title: 'Other'
			}
		]
	}

	shouldComponentUpdate(props) {
		return props.location.pathname !== this.props.location.pathname
	}

	render() {
		const items = this.items
		const location = this.props.location.pathname
		return (
			<header className="m-grid__item m-header" id="m_header">
				<div className="m-header__top">
					<div className="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
						<div className="m-stack m-stack--ver m-stack--desktop">
							<div className="m-stack__item m-brand">
								<div className="m-stack m-stack--ver m-stack--general m-stack--inline">
									<div className="m-stack__item m-stack__item--middle m-brand__logo">
										<h3>Valor</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="m-header__bottom">
					<div className="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
						<div className="m-stack m-stack--ver m-stack--desktop">
							<div className="m-stack__item m-stack__item--middle m-stack__item--fluid">
								<button className="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-light" id="m_aside_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
								<div className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light"  id="m_header_menu">
									<ul className="m-menu__nav m-menu__nav--submenu-arrow">
										{(items.map((item, n) => {
											return (
												<li key={n} className={`m-menu__item ${(item.link === location) ? 'm-menu__item--active' : null}`}>
													<Link to={item.link} className="m-menu__link">
														<span className="m-menu__item-here">&nbsp;</span>
														<span className="m-menu__link-text">{item.title}</span>
													</Link>
												</li>
											)
										}))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}

}

export default withRouter(Header)