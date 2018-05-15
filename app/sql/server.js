import Knex from 'knex'
import Heroic from '../heroic'
import Glob from 'glob-promise'
import Bookshelf from 'bookshelf'
//import Registry from 'bookshelf-registry'
export default class SQL {

  static instance = {}

  constructor() {
    SQL.instance = Bookshelf(Knex({
      client: 'mysql2',
      cconnection: Heroic.Config.database
    }))
  }

  static init() {
    return new Promise(async (resolve, reject) => {
      await SQL.testConnection()
      await SQL.loadModels()
      resolve()
    })
  }

  static testConnection() {
    return new Promise(async (resolve, reject) => {
      resolve()
    })
  }

  static loadModels() {
    return new Promise((resolve, reject) => {
      Glob(`${__dirname}/models/*.js`)
        .then(models => {
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}