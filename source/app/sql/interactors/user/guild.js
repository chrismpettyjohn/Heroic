import Model from '~/app/sql/models/user/guilds/guild'
export default class Guild {

  static read(id) {
    if (id) {
      return Model.query().findById(id).eager('owner').select()
    } else {
      return Model.query().eager('[owner, members]').select()
    }
  }

}
