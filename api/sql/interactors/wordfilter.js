import Model from '@/sql/models/wordfilter'
export default class Interactor {
  static async read () {
    return Model.query()
  }
}
