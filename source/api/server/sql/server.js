import Knex from 'knex'
import { Model } from 'objection'
import Config from '../../config'

export default class SQL {
  static async init () {
    const knex = Knex({
      client: 'mysql2',
      connection: Config.sql
    })
    Model.knex(knex)
    return true
  }

  static async test () {
    const knex = Model.knex()
    try {
      await knex.select('id').limit(1).from('heroic_settings')
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
