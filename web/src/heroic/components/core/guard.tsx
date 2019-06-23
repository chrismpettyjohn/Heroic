import React from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import NotAllowed from 'heroic/pages/core/not-allowed'

interface Interface extends Redux {
	component: any,
	guard: string,
	page: string
}

const Guard = ({ component, guard, session: { active }, website: { SITE_NAME }, page }: Interface) => {
	document.title = `${SITE_NAME} - ${page}`
	switch (guard) {
		case 'admin':
			return <NotAllowed/>

		case 'everyone':
			return component

		case 'guest':
			return active
				? <NotAllowed/>
				: component

		case 'user':
			return active
				? component
				: <NotAllowed/>

		default:
			return <NotAllowed/>
	}
}


export default Stateful(Guard)
