import Model from '../../models/config/website'
export default class Interactor {

  static async update (data) {
    data.id = 1
    return new Model(data).save()
  }

  static async read () {
    return Model.where('id', 1).fetch({ columns : ['site_name', 'site_desc', 'site_link', 'server_ip', 'server_port', 'swf_base', 'swf_gamedata', 'findretros_user', 'findretros_enabled', 'store_enabled', 'paypal_key', 'paypal_mode'] }) 
  }

}
