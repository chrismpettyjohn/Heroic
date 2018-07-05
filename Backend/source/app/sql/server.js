import Knex from 'knex'
import Heroic from '~/app/heroic'
import {Model} from 'objection'
export default class SQL {
  static async init () {
    // Setup Knex
    const knex = Knex({client: 'mysql2', connection: Heroic.Config.database})
    Model.knex(knex)
    // return
    return true
  }
}
