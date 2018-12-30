import Actions from './actions'
import { connect } from 'redux-zero/react'

const map = ({ route }) => ({ route })

const stateful = (component) => {
  return connect(map, Actions)(component)
}

export default stateful