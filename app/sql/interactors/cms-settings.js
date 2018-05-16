import Model from '~/app/sql/models/cms-settings'
export default class Settings {

  static read() {
    return Model.query().select()
  }

}
