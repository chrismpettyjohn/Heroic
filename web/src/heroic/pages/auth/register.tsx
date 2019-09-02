import {Link} from 'react-router-dom'
import React, {Component,Fragment} from 'react'
import {FormGroup} from 'heroic/components/base/form/group'
import SessionActions from 'heroic/app/redux/actions/session'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface State {
	loading: boolean
	user: {
		email: string
		username: string
		password: string
		passwordAgain: string
	}
}


class Login extends Component<RouteComponentProps, State> {

	state: State = {
		loading: false,
		user: {
			email: '',
			username: '',
			password: '',
			passwordAgain: ''
		}
	}

	onChange = (column: string, value: string): void => {
		this.setState({
			user: {
				[column]: value,
				...this.state.user
			}
		})
	}

	onSubmit = async (): Promise<void> => {
		try {
		}
		catch (e) {
		}
	}

	isDisabled = (): boolean => {
		const {user} = this.state
		const required: string[] = ['username', 'password']
		return required.filter(column => user[column] === '').length > 0
	}

	render () {
		const {loading, user} = this.state
		return (
			<Fragment>
				<h1>Welcome to Heroic</h1>
				<p>A strange place with even stranger people!</p>
				<FormGroup
					disabled={false}
					rows={[
						{
							type: 'text',
							label: 'Username',
							column: 'username',
							value: user.username,
							onChange: this.onChange
						},
						{
							type: 'email',
							label: 'Email',
							column: 'email',
							value: user.email,
							onChange: this.onChange
						},
						{
							type: 'password',
							label: 'Password',
							column: 'password',
							value: user.password,
							onChange: this.onChange
						},
						{
							type: 'password',
							label: 'Password Again',
							column: 'passwordAgain',
							value: user.passwordAgain,
							onChange: this.onChange
						}
					]}
					loading={loading}
					onSubmit={this.onSubmit}
				/>
				<Link className="link" to="/login">
					Already A Member?
				</Link>
			</Fragment>
		)
	}

}

export default withRouter(Login)
