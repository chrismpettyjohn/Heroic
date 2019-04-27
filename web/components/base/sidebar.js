import React from 'react'
import Link from 'next/link'

const navigation = [
	{
		type: 'label',
		text: 'Pages'
	},
	{
		type: 'button',
		icon: 'shopping-cart',
		text: 'View All Pages',
		link: 'pages/list'
	},
	{
		type: 'button',
		icon: 'database',
		text: 'Test',
		link: 'pages/test'
	},
	{
		type: 'label',
		text: 'Furniture'
	},
	{
		type: 'label',
		text: 'Images'
	}
]

export default () => {
	
	return (
		<div>
			<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
				<div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop">
					<div className="kt-aside__brand kt-grid__item">
						<div className="kt-aside__brand-logo" style={{ margin: '0 auto' }}>
							<h1>
								<i className="fa fa-shopping-cart mr-3"/>
							</h1>
						</div>
					</div>
					<div className="kt-aside-menu">
						<ul className="kt-menu__nav" style={{ marginTop: -50 }}>
							{
								navigation.map((item, i) => {
									return item.type === 'label'
										? (
											<li className="kt-menu__section" key={i}>
												<h4 className="kt-menu__section-text">{item.text}</h4>
											</li>
										)
										: (
											<li className="kt-menu__item" key={i}>
												<Link href={`/${item.link}`}>
													<a className="kt-menu__link">
														<i className={`kt-menu__link-icon fa fa-${item.icon}`} style={{ fontWeight: 100 }}/>
														<span className="kt-menu__link-text">{item.text}</span>
													</a>
												</Link>
											</li>
										)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
	
}
