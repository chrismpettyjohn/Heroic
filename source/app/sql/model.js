import {Model, compose} from 'objection'
import visibility from 'objection-visibility'
import password from 'objection-password-bcryptjs'
const plugins = compose([visibility])
export default class baseModel extends plugins(Model) {}