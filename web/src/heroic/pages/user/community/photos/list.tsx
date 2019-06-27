import React from 'react'
import Photo from 'heroic/app/interface/data/photo'
import PhotoCard from "../../../../components/base/cards/photo";

interface Props {
	photos: Photo[]
}

export default ({ photos }: Props) => (
	<div className="heroic-photo-list">
		{
			photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
		}
	</div>
)



