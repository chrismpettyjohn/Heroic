import Model from '~/app/sql/models/cms/forum/section'
export default class Section {

  static create (section) {
    return Model.query().insert(section)
  }

  static update (section, id) {
    return Model.query().update(section).where('id', id)
  }

  static async read (id) {
    if (id) {
      let section = await Model.query().findById(id).eager('[posts, posts.author]').select()
      if (section) {
        return section
      } else {
        return new Error('Session does not exist')
      }
    } else {
      return Model.query().select()
    }
  }

  static delete (id) {
    return Model.query().deleteById(id)
  }

}
