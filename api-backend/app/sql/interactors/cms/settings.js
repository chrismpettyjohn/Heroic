import Model from '~/app/sql/models/cms/settings'
export default class Settings {
  static read () {
    return Model.query().findById(1).select()
  }

  static async update (settings) {
    return new Promise(async (resolve, reject) => {
      try {
        await Model.query().patch(settings)
        resolve()
      } catch (error) {
        reject(Error('Database error has occured'))
      }
    })
  }
}
