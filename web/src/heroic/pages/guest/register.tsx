import {Link} from 'react-router-dom'
import React, {Component} from 'react'

export default class extends Component {

	render () {
		return (
			<div className="left-inner">
				<p>Register</p>
				<Link className="link" to="/login">Already A Member?</Link>
			</div>
		)
	}

}
