import React from 'react'
import Head from 'next/head'
import Base from '~/components/base/'

export default (props) => {
	
	return (
		<div className="kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-demo-panel--on">
			<Head>
				<title>Catalog Planner</title>
				<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500" rel="stylesheet"/>
				<link href="/static/css/theme.css" rel="stylesheet"/>
				<link href="/static/css/fontawesome.css" rel="stylesheet"/>
			</Head>
			<div className="kt-grid kt-grid--hor kt-grid--root">
				<Base.Header/>
				<Base.Sidebar/>
				<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
					<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper">
						<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
							<div className="kt-content  kt-grid__item kt-grid__item--fluid">
								{props.children}
							</div>
						</div>
						<Base.Footer/>
					</div>
				</div>
			</div>
		</div>
	)
	
}
