import Model from '~/app/sql/models/user/guilds/guild'
export default class Guild {
  static async read (id) {
    if (id) {
      let group = await Model.query().findById(id).eager('[owner, members]').select()
      if (group) {
        return group
      } else {
        return Error('Group not found')
      }
    } else {
      let groups = await Model.query().eager('[owner, members]').select()
      return groups
    }
  }
}
