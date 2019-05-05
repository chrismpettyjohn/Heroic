import React, {Component} from 'react'
import {Router} from 'components/core'
import {Loading} from 'components/base'
import IRedux from 'app/interface/redux'
import Stateful from 'app/redux/stateful'

class Builder extends Component<IRedux> {

	render () {
		return this.props.session.ready
			? <Router/>
			: <Loading/>
	}

}

export default Stateful(Builder)
