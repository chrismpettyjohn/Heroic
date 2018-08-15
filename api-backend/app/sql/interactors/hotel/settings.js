import Model from '~/app/sql/models/hotel/settings'
export default class Settings {
  static async read () {
    return Model.query().select()
  }

  static async update (values) {
    return new Promise(async (resolve, reject) => {
      values.forEach(data => {
        // Fuck await for now ;(
        Model.query().where('key', data.key).patch({ value: data.value })
      })
      resolve(true)
    })
  }
}
