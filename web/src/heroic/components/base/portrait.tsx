import React from 'react'
import User from 'heroic/app/interface/data/user'
import {getSource} from 'heroic/components/base/figure'
import {withRouter, RouteComponentProps} from 'react-router'

interface Props extends RouteComponentProps {
	user: User
}

const Portrait = ({ user, history }: Props) => {
	const source = getSource({ figure: user.avatar })
	return (
		<div className="habbo-portrait" style={{ backgroundImage: `url(${source})` }} onClick={() => history.push(`/profile/${user.username}`)}>
			<i className={user.online === 1 ? 'online' : 'offline'}/>
		</div>
	)
}

export default withRouter(Portrait)
