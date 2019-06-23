import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import Input from 'heroic/components/base/form/input'
import SessionActions from 'heroic/app/redux/actions/session'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface State {
	error: string | null,
	username: string,
	password: string,
	pending: boolean
}

class Login extends Component<RouteComponentProps> {

	state: State = {
		error: null,
		username: '',
		password: '',
		pending: false
	}

	onChange = (key: string, value: string | boolean): void => {
		this.setState({
			[key]: value
		})
	}

	onSubmit = async (event): Promise<void> => {
		event.preventDefault()
		const {username, password} = this.state

		try {
			this.onChange('pending', true)
			await SessionActions.attempt(username, password)
			this.props.history.push('/me')
		}
		catch (e) {
			this.onChange('pending', false)
		}
	}


	isDisabled = (): boolean => this.state.username === '' || this.state.password === ''

	render () {
		const {username, password} = this.state
		return (
			<div className="left-inner">
				<h1>Welcome to Habfort</h1>
				<p>A strange place with even stranger people!</p>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username</label>
						<Input column="username" type="text" value={username} onChange={this.onChange} />
					</div>
					<div className="form-group">
						<label>Password</label>
						<Input column="password" type="password" value={password} onChange={this.onChange} />
					</div>
					<button className="btn btn-green w-100" disabled={this.isDisabled()} type="submit">
						Let's go!
					</button>
				</form>
				<Link className="link" to="/register">Or Join Today...</Link>
			</div>
		)
	}

}

export default withRouter(Login)
