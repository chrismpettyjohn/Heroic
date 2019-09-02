import {Link} from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import Input from 'heroic/components/base/form/input'
import SessionActions from 'heroic/app/redux/actions/session'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface State {
	error: string | null
	user: {
		username: string
		password: string
		passwordAgain: string
		email: string
	}
	pending: boolean
	loading: boolean
}

type Field = {
	column: string
	type: string
	pretty: string
}

class Register extends Component<RouteComponentProps> {

	fields: Field[] = [
		{
			column: 'username',
			type: 'text',
			pretty: 'Username'
		},
		{
			column: 'email',
			type: 'email',
			pretty: 'Email'
		},
		{
			column: 'password',
			type: 'password',
			pretty: 'Password'
		},
		{
			column: 'passwordAgain',
			type: 'password',
			pretty: 'Password Again'
		}
	]

	state: State = {
		error: null,
		user: {
			username: '',
			password: '',
			passwordAgain: '',
			email: ''
		},
		pending: false,
		loading: false
	}

	onChange = (key: string, value: string | boolean): void => {
		this.setState({
			[key]: value
		})
	}

	onSubmit = async (event): Promise<void> => {
		event.preventDefault()
	}

	isDisabled = (): boolean => {
		const {user} = this.state
		const required: string[] = ['username', 'password', 'password_again', 'email']
		return required.filter(x => user[x] !== '').length > 0
	}

	render () {
		const {user, pending} = this.state

		return (
			<Fragment>
				<h1>Welcome to Heroic</h1>
				<p>A strange place with even stranger people!</p>
				<form onSubmit={this.onSubmit}>
					{
						this.fields.map(field => (
							<div className="form-group" key={field.column}>
								<label>{field.pretty}</label>
								<Input
									column={field.column}
									type={field.type}
									value={user[field.column]}
									onChange={this.onChange}
								/>
							</div>
						))
					}
					<button className="btn btn-green w-100" disabled={this.isDisabled() || pending} type="submit">
						{
							!pending
								? "Let's go!"
								: <i className="fa fa-spinner fa-spin"/>
						}
					</button>
				</form>
				<Link className="link" to="/login">
					Already A Member?
				</Link>
			</Fragment>
		)
	}


}

export default withRouter(Register)
