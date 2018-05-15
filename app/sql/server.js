import Knex from 'knex'
import Heroic from '../heroic'
import Glob from 'glob-promise'
import {Model} from 'objection'
export default class SQL {

  constructor() {
    const knex = Knex({client: 'mysql2', connection: Heroic.Config.database})
    Model.knex(knex)
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
      Glob(`${__dirname}/models/*.js`).then(models => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

}
