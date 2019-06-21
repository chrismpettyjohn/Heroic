import {connect} from 'redux-zero/react'

const map = ({ core, website, session }) =>({ core, website, session })


export default (component) => {
	return connect(map)(component)
}
