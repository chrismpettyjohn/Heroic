import Model from '~/app/sql/models/user/guilds'
export default class Guilds {

  static read(id) {
    if (id) {
      return Model.query().findById(id).eager('owner').select()
    } else {
      return Model.query().eager('[owner, members]').select()
    }
  }

}
