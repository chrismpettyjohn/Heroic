import File from 'fs'
import knex from 'knex'
import bookshelf from 'bookshelf'
import Delete from 'bookshelf-cascade-delete'

const data = {
  client: "mysql2",
  connection: {
    host: global.config.database.host,
    user: global.config.database.username,
    password: global.config.database.password,
    database: global.config.database.database
  }
}
const Database = bookshelf(knex(data))

Database.plugin(Delete)

export default Database