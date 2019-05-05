import Actions from './actions'
import {connect} from 'redux-zero/react'

const map = ({ website, session }) =>({ website, session })


export default (component) => {
	return connect(map, Actions)(component)
}
