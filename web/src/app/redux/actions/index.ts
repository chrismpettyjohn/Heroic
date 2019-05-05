import Session from './session'
import Website from './website'
import {combineActions} from 'redux-zero/utils'

export default combineActions(
	Session,
	Website
)
