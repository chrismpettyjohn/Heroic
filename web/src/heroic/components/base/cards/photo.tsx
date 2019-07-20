import React from 'react'
import Moment from 'moment'
import UserCard from './user'
import IPhoto from 'heroic/app/interface/data/photo'
import {RouteComponentProps,withRouter} from 'react-router'

interface Props extends RouteComponentProps{
	photo: IPhoto
}

const Photo =  ({ photo , history}: Props) => {
	const date = Moment.unix(photo.timestamp).format('MMMM DD, YYYY')
	return (
		<div className="heroic-card" onClick={() => history.push(`/photos/${photo.id}`)}>
			<div className="heroic-card-content">
				<div className="item-photo">
					<div className="image" style={{ backgroundImage: `url(${photo.url}`}}/>
					<div className="photo-meta">
						{date}
					</div>
				</div>
				<UserCard user={photo.user}/>
			</div>
		</div>
	)
}

export default withRouter(Photo)
