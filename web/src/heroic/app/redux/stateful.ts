import {connect} from 'redux-zero/react'

const map = ({ core, pages, website, session }) =>({ core, pages, website, session })


export default (component) => {
	return connect(map)(component)
}
