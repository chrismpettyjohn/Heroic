import React from 'react'
import User from 'heroic/app/interface/data/user'
import {getSource} from 'heroic/components/base/figure'
import {withRouter, RouteComponentProps } from 'react-router-dom'

const Portrait = ({ user, history }: RouteComponentProps) => {
	const source = getSource({ figure: user.avatar })
	const onClick = (): void => {
		history.push(`/profile/${user.username}`)
	}
	return (
		<div className="habbo-portrait" style={{ backgroundImage: `url(${source})` }} onClick={onClick}>
			<i className={user.online === 1 ? 'online' : 'offline'}/>
		</div>
	)
}

export default withRouter(Portrait)
