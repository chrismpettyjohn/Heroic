import Rank from '../user/ranks'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_store_products'
  }

  rank () {
    return this.hasOne(Rank, 'id', 'rank_id').query('columns', ['id', 'rank_name', 'badge'])
  } 

}
