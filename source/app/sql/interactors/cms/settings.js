import Validator from 'validatorjs'
import Model from '~/app/sql/models/cms/settings'
export default class Settings {
  static read () {
    return Model.query().select()
  }

  static async update (settings) {
    // Validate Data
    let validation = new Validator(settings, Model.rules)
    // Run Only If Valid
    if (validation.passes()) {
      // Run Query
      await Model.query().patch(settings)
      // Return
    } else {
      return Error('Invalid validation')
    }
  }
}
