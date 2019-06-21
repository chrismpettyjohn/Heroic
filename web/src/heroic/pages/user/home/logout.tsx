import React from 'react'
import {Redirect} from 'react-router'
import SessionActions from 'heroic/app/redux/actions/session'

export default () => {
	SessionActions.logout()
	return <Redirect to="/login"/>
}
