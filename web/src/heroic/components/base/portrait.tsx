import React from 'react'
import User from 'heroic/app/interface/data/user'
import {getSource} from 'heroic/components/base/figure'

interface Props {
	user: User
}

export default ({ user }: Props) => {
	const source = getSource({ figure: user.avatar })
	return (
		<div className="habbo-portrait" style={{ backgroundImage: `url(${source})` }}>
			<i className={user.online === 1 ? 'online' : 'offline'}/>
		</div>
	)
}
