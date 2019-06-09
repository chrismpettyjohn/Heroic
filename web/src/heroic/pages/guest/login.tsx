import React, {Component} from 'react'

export default class extends Component {

	render () {
		return (
			<div className="left-inner">
				<h1>Welcome to Habfort</h1>
				<p>A strange place with even stranger people!</p>
				<form>
					<div className="form-group">
						<label>Username</label><input className="form-control" type="text"/>
						<div className="invalid-feedback">
							Invalid Username
						</div>
					</div>
					<div className="form-group">
						<label>Password</label><input className="form-control" type="password"/>
						<div className="invalid-feedback">
							Invalid Password
						</div>
					</div>
					<button className="btn btn-green w-100" disabled={true} type="submit">Let's go!</button>
				</form>
				<a className="link" href="/register">Or Join Today...</a>
			</div>
		)
	}

}
