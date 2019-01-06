import React from 'react'
import Stateful from 'app/state/stateful'
import Title from 'components/utility/title'
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
		return (
				<div className="m-grid__item m-grid__item--fluid m-wrapper">
					<Title title={route.title}/>
					<div className="m-grid__item m-grid__item--fluid m-wrapper">
						<Subheader/>
						{(route.component) ? <route.component/> : null }
					</div>
				</div>
			)

	}

}

export default Stateful(Page)