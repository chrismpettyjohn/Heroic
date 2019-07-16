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
	username: 'Chris',
	motto: 'We love Chris',
	avatar: 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110',
	credits: 10,
	pixels: 100,
	points: 1,
	online: 0,
	account_created: 1560056677
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
