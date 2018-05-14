import Product from './products'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_store_purchases'
  }

  product () {
    return this.hasOne(Product, 'id', 'product_id').query('columns', ['id', 'title', 'rank_id', 'price'])
  }


}
