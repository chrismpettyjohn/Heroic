import React from 'react'
import Page from './page'
import Routes from 'app/routes'
import {Route, Switch} from 'react-router-dom'

class Router extends React.Component {

	render () {
		return (
			<Switch>
				{(Routes.map((route, i) => {
					return <Route exact key={i} path={`/${route.to}`} render={() => <Page route={route}/>} />
				}))}
			</Switch>
		)
	}

}

export default Router