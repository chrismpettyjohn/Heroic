import Profile from './profile'
import {PropTypes} from 'react-router-dom'
import React, {PureComponent} from 'react'
import User from 'heroic/app/interface/data/user'

interface Props extends PropTypes {

}

interface State {
	profile: User | null,
	loading: boolean
}

const user: User = {
	id: 1,
	username: 'Chiru',
	motto: 'Cyclone is better than u',
	avatar: '',
	credits: 10,
	pixels: 100,
	points: 1,
	online: 0
}

export default class extends PureComponent<Props> {

	state: State = {
		profile: null,
		loading: true
	}

	componentDidMount () {
		this.fetch()
	}

	fetch = async () => {
		this.setState({
			profile: user,
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
