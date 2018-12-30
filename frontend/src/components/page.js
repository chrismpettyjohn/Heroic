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
		return [
			<Title key="title" title={route.title}/>,
			<Subheader key="subheader"/>,
			<route.component key="component"/>
		]
	}

}

export default Stateful(Page)