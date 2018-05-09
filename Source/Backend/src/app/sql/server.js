import Ini from 'ini'
import File from 'fs'
import knex from 'knex'
import bookshelf from 'bookshelf'
import Delete from 'bookshelf-cascade-delete'

var config = Ini.parse(File.readFileSync('./config.ini', 'utf-8'))
 
const data = {
  client :"mysql2",
  connection:{
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
  }
}
const Database = bookshelf(knex(data))

Database.plugin(Delete)

export default Database
