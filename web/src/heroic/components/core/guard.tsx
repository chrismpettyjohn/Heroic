import React from 'react'
import Redux from 'heroic/app/interface/redux'
import {IGuard} from '../../app/config/guards'
import Stateful from 'heroic/app/redux/stateful'
import NotAllowed from 'heroic/pages/core/not-allowed'

interface Interface extends Redux {
	component: any
	guard: IGuard
	page: string
}

const Guard = ({ component, guard, session, website: { SITE_NAME }, page }: Interface) => {

	if (guard(session)) {
		document.title = `${SITE_NAME} - ${page}`
		return component
	}
	else {
		document.title = `${SITE_NAME} - Not Allowed`
		return <NotAllowed/>
	}

}


export default Stateful(Guard)
