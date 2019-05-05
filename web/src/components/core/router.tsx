import Routes from 'app/routes'
import React, {PureComponent} from 'react'
import {Route} from 'react-router-dom'

interface IState {
	ready: boolean,
	routes: Array<IRoute>
}

interface IRoute {
	to: string,
	component: any
}

export default class extends PureComponent<{}> {

	state: IState = {
		ready: false,
		routes: []
	}

	componentWillMount () {
		this.prepare(Routes)
	}

	prepare = routes => {

		const final: Array<IRoute> = routes.map(parent => this.format(parent))

		this.setState({
			ready: true,
			routes: final
		})

	}

	format = parent => {
		return {}
	}

	render () {
		const {ready,routes} = this.state
		return !ready
			? null
			: routes.map( ({ to, component }) => <Route to={to} component={component}/>)
	}

}
