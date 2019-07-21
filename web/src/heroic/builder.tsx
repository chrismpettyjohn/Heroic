import React, {Component} from 'react'
import {Router} from 'heroic/components/core'
import {Loading} from 'heroic/components/base'
import IRedux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import SessionActions from 'heroic/app/redux/actions/session'

class Builder extends Component<IRedux> {

	componentDidMount () {
		SessionActions.initialize()
	}

	render () {
		return this.props.session.ready
			? <Router/>
			: <Loading/>
	}

}

export const BuilderStandalone = Builder
export default Stateful(Builder)
