import File from 'fs'
import knex from 'knex'
import bookshelf from 'bookshelf'
import Delete from 'bookshelf-cascade-delete'

const config = JSON.parse(File.readFileSync(`${process.cwd()}/config.json`, 'utf8')).database
const data = {
  client: "mysql2",
  connection: {
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
  }
}
const Database = bookshelf(knex(data))

Database.plugin(Delete)

export default Database