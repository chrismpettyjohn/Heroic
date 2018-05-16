// Dependencies
import {Model, compose} from 'objection'
import visibility from 'objection-visibility'
import password from 'objection-password-bcryptjs'
import unique from 'objection-unique'

const plugins = compose([visibility, unique(), password()])
export default class baseModel extends plugins(Model) {}