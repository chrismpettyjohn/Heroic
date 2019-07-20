import Profile from './profile'
import {API} from 'heroic/app/api'
import {match, withRouter} from 'react-router-dom'
import React, {PureComponent} from 'react'
import User from 'heroic/app/interface/data/user'

interface Props {
	username: string
}

interface State {
	profile: User | null,
	loading: boolean
}


class ProfileController extends PureComponent<match<Props>> {

	state: State = {
		profile: null,
		loading: true
	}

	componentDidMount () {
		this.fetch()
	}

	fetch = async () => {
		const {username} = this.props.match.params
		const route: string = username ? `users/${username}` : 'session'
		const result: User = await API.get(route)
		this.setState({
			profile: result,
			loading: false
		})
	}

	render () {
		const {profile,loading} = this.state
		return loading
			? <p>Loading</p>
			: <Profile user={profile!}/>
	}

}

export default withRouter(ProfileController)
