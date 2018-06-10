import Model from '~/app/sql/models/user/guilds/guild'
export default class Guild {

  static read(id) {
    return new Promise (async (resolve, reject) => {
      if (id) {
        let group = await Model.query().findById(id).eager('[owner, members]').select()
        if (group) {
          resolve(group)
        } else {
          reject('Group not found')
        }
      } else {
        let groups = await Model.query().eager('[owner, members]').select()
        resolve(groups)
      }
    })
  }

}
