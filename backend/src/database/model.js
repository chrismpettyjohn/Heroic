import visibility from 'objection-visibility'
import { compose, Model } from 'objection'

const plugins = compose([visibility])
export default class baseModel extends plugins(Model) { }
