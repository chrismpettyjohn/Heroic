import React from 'react'
import Redux from 'heroic/app/interface/redux'
import Stateful from 'heroic/app/redux/stateful'
import {Redirect} from 'react-router-dom'

const NotFound = ({ session: { active } }: Redux) => active
	? <Redirect to="/me"/>
	: <Redirect to="/login"/>

export default Stateful(NotFound)
