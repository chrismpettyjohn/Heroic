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

	componentDidMount () {
		let routes = this.state.routes
		Routes.forEach(async (route) => {

			routes.push(route)

			if (route.children) await this.mapChildren(route)

			this.setState({
				ready: (routes.length === await this.getRouteCount()),
				routes: routes
			})

		})
	}
	getRouteCount () {
		return new Promise ((resolve) => {

			let count = 0
			let toplevel = 0
			for (let route of Routes) {
				if (route.children) {
					for (let child of route.children) {
						if (child.children) count += child.children.length + 1
					}
					count++
					toplevel++
				}
				else {
					count++
					toplevel++
				}
			}

			if (toplevel === Routes.length) {
				resolve(count)
			}

		})
	}


	mapChildren = (route) => {
		route.children.forEach(async (child) => {

			child.to = `${route.to}/${child.to}`
			child.protected = route.protected
			child.sidebar = route.sidebar

			let routes = this.state.routes
			routes.push(child)

			if (child.children) this.mapChildren(child)
			this.setState({
				ready: (routes.length === await this.getRouteCount()),
				routes: routes
			})

		})
	}


	mapView = (route) => {
		if (route.protected) {
			return <Route exact key={route.to} path={`/${route.to}`} render={() => <Protected {...this.props} route={route}/>}/>
		}
		else {
			return <Route exact key={route.to} path={`/${route.to}`} render={() => <Page route={route}/>}/>
		}
	}


	render() {
		const { ready, routes } = this.state

		if (ready) {
			return (
				<Switch>
					{(routes.map(route => {
						return this.mapView(route)
					}))}
					<Route component={NotFound}/>
				</Switch>
			)
		}
		else {
			return null
		}

	}
}

class NotFound extends React.Component {

	render () {
		return (
			<div className="row" style={{ marginTop: '10%'}}>
				<div className="col-md-3">&nbsp;</div>
				<div className="col-md-6">
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