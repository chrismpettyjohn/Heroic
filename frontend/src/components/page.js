import React from 'react'
import Stateful from 'app/state/stateful'
import Title from 'components/utility/title'

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
			<route.component key="component"/>
		]
	}

}

export default Stateful(Page)