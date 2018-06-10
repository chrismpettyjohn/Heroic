import Model from '~/app/sql/models/cms/news/article'
export default class Article {

  static read(id) {
    return new Promise(async (resolve, reject) => {
      if (id) {
        let article = await Model.query().findById(id).eager('[author, category]')
        if (article) {
          resolve(article)
        } else {
          reject('No article found')
        }
      } else {
        let articles = await Model.query().eager('[author, category]')
        resolve(articles)
      }
    })
  }

}
