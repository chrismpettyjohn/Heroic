import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'wordfilter'
  }

  static get visible () {
    return [
      'key',
      'replacement'
    ]
  }
}
