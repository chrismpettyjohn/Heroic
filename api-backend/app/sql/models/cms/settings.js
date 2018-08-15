import Model from '~/app/sql/model'
export default class Settings extends Model {
  static tableName = 'heroic_settings';
  // Returns on select queries
  static visible = [
    'name',
    'link',
    'static',
    'server_ip',
    'server_port',
    'swf_link',
    'swf_base',
    'swf_gamedata',
    'fr_user',
    'fr_mode',
    'paypal_key',
    'paypal_mode',
    'user_imager'
  ]
}
