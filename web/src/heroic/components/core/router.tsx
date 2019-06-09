import Routes from 'heroic/app/routes'
import {Route} from 'react-router-dom'
import React, {PureComponent} from 'react'
import {IState,IParent,IRoute} from 'heroic/app/interface/router'

export default class extends PureComponent<{}> {

	state: IState = {
		ready: false,
		routes: []
	}

	componentWillMount () {
		this.prepare(Routes)
	}

	prepare = (routes: Array<IParent>): void => {
		const final: Array<IRoute> = routes.map(parent =>
			parent.routes.map(child => this.formatRoute(child, parent))
		).flat()

		this.setState({
			ready: true,
			routes: final
		})

	}

	formatRoute = (route: IRoute, parent: IParent): IRoute => {
		return {
			component: route.component,
			extends: parent.extends || route.extends,
			guard: parent.guard || route.guard,
			path: parent.prefix ? `${parent.prefix}/${route.path}` : route.path
		}
	}

	render () {
		const {ready,routes} = this.state
		return !ready
			? null
			: routes.map( ({ component, path }) => <Route component={component} key={path} path={`/${path}`}/>)
	}

}
