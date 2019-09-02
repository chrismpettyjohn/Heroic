import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
import React, {Component,Fragment} from 'react'
import {IUser} from '../../../../../interface/user'
import {SessionService} from '../../app/service/session'
import {FormGroup} from 'heroic/components/base/form/group'
import SessionActions from 'heroic/app/redux/actions/session'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface State {
	loading: boolean
	user: {
		username: string
		password: string
	}
}


class Login extends Component<RouteComponentProps, State> {

	state: State = {
		loading: false,
		user: {
			username: '',
			password: ''
		}
	}

	onChange = (column: string, value: string): void => {
		this.setState({
			user: {
				...this.state.user,
				[column]: value
			}
		})
	}

	onSubmit = async (): Promise<void> => {
		const {user} = this.state
		try {
			this.setState({ loading: true })
			const { access_token } = await SessionService.authenticateWithCredentials(user.username, user.password)
			const userResponse: IUser = await SessionService.authenticateWithJWT(access_token)
			SessionActions.login(userResponse)
			this.props.history.push('/me')
		}
		catch (e) {
			this.setState({ loading: false })
			toast.error('Login Failed.  Please recheck the username and password and try again.', {
				position: toast.POSITION.TOP_LEFT
			})
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
					disabled={this.isDisabled()}
					rows={[
						{
							type: 'text',
							label: 'Username',
							column: 'username',
							value: user.username,
							onChange: this.onChange
						},
						{
							type: 'password',
							label: 'Password',
							column: 'password',
							value: user.password,
							onChange: this.onChange
						},
					]}
					loading={loading}
					onSubmit={this.onSubmit}
				/>
				<Link className="link" to="/register">
					Or Join Today...
				</Link>
			</Fragment>
		)
	}

}

export default withRouter(Login)
