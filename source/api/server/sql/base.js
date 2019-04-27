import { compose, Model } from 'objection'
import visibility from 'objection-visibility'

const plugins = compose([visibility])
export default class baseModel extends plugins(Model) {
}
