import Actions from './actions'
import { connect } from 'redux-zero/react'

const map = ({ route, session }) => ({ route, session })

const stateful = (component) => {
  return connect(map, Actions)(component)
}

export default stateful