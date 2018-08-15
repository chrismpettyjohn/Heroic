import Query from 'mysql2'
import Heroic from '~/app/heroic'
export default class Schema {
  static connect () {
    return Query.createConnection({
      host: Heroic.Config.database.host,
      user: Heroic.Config.database.user,
      password: Heroic.Config.database.password,
      database: 'INFORMATION_SCHEMA'
    })
  }

  static fetch (column) {
    return new Promise(async (resolve, reject) => {
      // Prepare Variables
      let conn = {}
      let query = {}
      // Connect to database
      conn = await Schema.connect()
      // Define Query
      query = `SELECT column_name FROM COLUMNS WHERE table_schema = '${Heroic.Config.database.database}' AND table_name = 'permissions' AND column_name LIKE 'cmd_${column}%'`
      // Run Query
      conn.execute(query, (error, results, fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(Error(error))
        }
      })
    })
  }
}
