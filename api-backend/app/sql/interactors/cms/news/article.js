import Model from '~/app/sql/models/cms/news/article'
export default class Article {
  // CRUD
  static async read (id) {
    if (id) {
      let article = await Model.query().findById(id).eager('[author, author.perm, category]')
      if (article) {
        return article
      } else {
        return Error('No article found')
      }
    } else {
      let articles = await Model.query().eager('[author, category]')
      return articles
    }
  }
  static async update (data) {
    return new Promise(async (resolve, reject) => {
      try {
        // Prepare
        const id = data.id
        // Locate
        await Model.query().findById(data.id)
        // Format
        delete data.id
        delete data.author
        delete data.created_at
        delete data.updated_at
        // Save
        await Model.query().patch(data).where('id', id)
        // Return
        resolve(true)
      } catch (e) {
        // Error Occured
        reject(Error(e))
      }
    })
  }
  // EXTRA
  static async query (query, key) {
    return new Promise(async (resolve, reject) => {
      // Prepare
      let articles = []
      // Perform
      switch (query) {
        case 'featured':
          articles = await Model.query().orderBy('created_at', 'DESC').limit(10).eager('[author, category]')
          resolve(articles)
          break
        case 'search':
          articles = await Model.query().where('title', 'LIKE', `%${key}%`).limit(10).eager('[author, category]')
          resolve(articles)
          break
        case 'recent':
          articles = await Model.query().orderBy('updated_at', 'DESC').limit(10).eager('[author, category]')
          resolve(articles)
          break
        case 'popular':
          articles = await Model.query().orderBy('views', 'DESC').limit(10).eager('[author, category]')
          resolve(articles)
          break
        case 'mine':
          articles = await Model.query().orderBy('created_at', 'DESC').where('user_id', key).limit(10).eager('[author, category]')
          resolve(articles)
          break
      }
    })
  }
}
