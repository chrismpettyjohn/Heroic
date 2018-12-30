import React from 'react'
import Stateful from 'app/state/stateful'
import Title from 'components/utility/title'
import Sidebar from 'components/layout/sidebar'
import Subheader from 'components/layout/subheader'

class Page extends React.Component {

	componentDidMount () {
		const { setRoute, route } = this.props
		setRoute({
			title: route.title,
			about: route.about
		})
	}

	render () {
		const route = this.props.route
		if (route.sidebar) {
			return (
				<div className="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop 	m-container m-container--responsive m-container--xxl m-page__container m-body">
					<Title title={route.title}/>
					<Sidebar use={route.sidebar}/>
					<div className="m-grid__item m-grid__item--fluid m-wrapper">
						<Subheader/>
						<route.component/>
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop 	m-container m-container--responsive m-container--xxl m-page__container m-body">
					<Title title={route.title}/>
					<div className="m-grid__item m-grid__item--fluid m-wrapper">
						<Subheader/>
						<route.component/>
					</div>
				</div>
			)
		}
	}

}

export default Stateful(Page)