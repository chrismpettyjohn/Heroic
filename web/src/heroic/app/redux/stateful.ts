import {connect} from 'redux-zero/react'
import {withRouter} from 'react-router-dom'

const map = ({ core, pages, website, session }) =>({ core, pages, website, session })

export default (component) => withRouter(connect(map)(component))
