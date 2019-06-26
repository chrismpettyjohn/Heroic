import React from 'react'
import Moment from 'moment'
import UserCard from './user'
import Photo from 'heroic/app/interface/data/photo'

interface Props {
	photo: Photo
}

export default ({ photo }: Props) => {
	const date = Moment(photo.timestamp).format('MMMM DD, YYYY')
	return (
		<div className="heroic-card">
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
