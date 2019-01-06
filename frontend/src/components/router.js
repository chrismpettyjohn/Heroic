import React from 'react'
import Page from './page'
import Routes from 'app/routes'
import Stateful from 'app/state/stateful'
import {Route, Switch} from 'react-router-dom'
import Portlet from 'components/reusable/portlet'

class Router extends React.Component {

	state = {
		ready: false,
		routes: []
	}

	componentDidMount() {
		let routes = this.state.routes
		Routes.forEach(async (route) => {

			routes.push(route)

			if (route.children) await this.mapChildren(route)

			this.setState({
				routes: routes
			})

		})
	}

	mapChildren = (route) => {
		route.children.forEach(async (child) => {

			child.to = `${route.to}/${child.to}`
			child.protected = route.protected

			let routes = this.state.routes
			routes.push(child)

			if (child.children) this.mapChildren(child)
			this.setState({
				routes: routes
			})

		})
	}


	mapView = (route) => {
		if (route.protected) {
			return <Route exact key={route.to} path={`/${route.to}`} render={() => <Protected {...this.props} route={route}/>}/>
		} else {
			return <Route exact key={route.to} path={`/${route.to}`} render={() => <Page route={route}/>}/>
		}
	}


	render() {
		const {routes} = this.state

		return (
			<Switch>
				{(routes.map(route => {
					if (route.component) {
						return this.mapView(route)
					}
					else {
						return null
					}
				}))}
				<Route component={NotFound}/>
			</Switch>
		)
	}

}

class NotFound extends React.Component {

	render () {
		return (
			<div className="m-grid__item m-grid__item--fluid m-wrapper" style={{ background: '#2c2e3e' }}>
				<Portlet border={false} skin="dark">
					<div className="m-widget7 m-widget7--skin-dark">
						<div className="m-widget7__desc">
							<h1>Page Not Found</h1>
							<p>Not until we are lost do we begin to understand ourselves.</p>
						</div>
						<div className="m-widget7__user">
							<div className="m-widget7__info">
								<span className="m-widget7__username">Henry David Thoreau</span>
							</div>
						</div>
					</div>
				</Portlet>
			</div>
		)
	}

}

class Protected extends React.Component {

	render() {
		const {route, session} = this.props

		if (session.active) {
			return <Page route={route}/>
		} else {
			return (
				<Portlet title="Not Authorized" type="danger">
					<h1 style={{marginTop: '1.5%'}}>This is not authorized</h1>
				</Portlet>
			)
		}
	}

}



export default Stateful(Router)