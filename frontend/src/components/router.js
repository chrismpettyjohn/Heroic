import React from 'react'
import Page from './page'
import Routes from 'app/routes'
import {Route, Switch} from 'react-router-dom'
import Portlet from 'components/reusable/portlet'

class Router extends React.Component {

	render () {
		return (
			<Switch>
				{(Routes.map((route, i) => {
					if (route.protected) {
						return <Protected key={i} route={route}/>
					} else {
						return <Route exact key={i} path={`/${route.to}`} render={() => <Page route={route}/>} />
					}
				}))}
			</Switch>
		)
	}

}

class Protected extends React.Component {

	render () {
		const { route, session } = this.props

		if (session) {
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

export default Router