import React from 'react'
import Photo from 'heroic/app/interface/data/photo'

interface Props {
	photo: Photo
}

export default ({ photo }: Props) => (
	<p>This is a photo</p>
)
