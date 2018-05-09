import Bans from './bans'
import Rank from './ranks'
import Database from  '../../server'
import Purchases from '../store/purchases'
export default class Model extends Database.Model {

  get tableName () {
    return 'users'
  }

  bans () {
    return this.hasMany(Bans, 'user_id').query('columns', ['id', 'user_id'])
  }

  rank () {
    return this.hasOne(Rank, 'id', 'rank').query('columns', ['id', 'rank_name', 'cms_admin'])
  }

  purchases () {
    return this.hasMany(Purchases).query('orderBy', 'id', 'DESC').query('columns', ['id', 'user_id', 'product_id', 'status', 'created_at'])
  }

}
