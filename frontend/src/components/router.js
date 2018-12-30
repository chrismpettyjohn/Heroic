import React from 'react'
import Page from './page'
import Routes from 'app/routes'
import Stateful from 'app/state/stateful'
import {Route, Switch} from 'react-router-dom'
import Portlet from 'components/reusable/portlet'

class Router extends React.Component {

	render () {
		return (
			<Switch>
				{(Routes.map((route, i) => {
					if (route.protected) {
						return <Route exact key={i} path={`/${route.to}`} render={() => <Protected {...  this.props} key={i} route={route}/>} />
					} else {
						return <Route exact key={i} path={`/${route.to}`} render={() => <Page route={route}/>} />
					}
				}))}
				<Route component={NotFound}/>
			</Switch>
		)
	}

}

class Protected extends React.Component {

	render () {
		const { route, session } = this.props

		if (session.active) {
			return <Page route={route}/>
		} else {
			return (
				<Portlet title="Not Authorized" type="danger">
					<h1 style={{ marginTop: '1.5%' }}>This is not authorized</h1>
				</Portlet>
			)
		}
	}

}

class NotFound extends React.Component {

		render () {
			return (
				<p>Not Found Jackass</p>
			)
		}

}



export default Stateful(Router)