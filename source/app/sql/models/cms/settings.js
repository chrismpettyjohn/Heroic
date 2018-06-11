import Model from '~/app/sql/model'
export default class Settings extends Model {
  static tableName = 'heroic_settings';
  // Returns on select queries
  static visible = [
    'site_name',
    'site_desc',
    'site_link',
    'server_ip',
    'server_port',
    'findretros_user',
    'findretros_enabled',
    'store_enabled',
    'swf_base',
    'swf_gamedata'
  ];

  // Validation
  static rules = {
    site_name: 'min:1|max:10|alpha_num',
    site_desc: 'min:1|max:50',
    site_link: 'min:10|max:20',
    server_ip: 'min:6|max:60',
    server_port: 'min:2|max:6|integer',
    findretros_user: 'min:1|max:20',
    findretros_enabled: 'required_with:findretros_user|min:4|max:5|boolean',
    store_enabled: 'min:4|max:5|boolean',
    paypal_key: 'required_with:store_enabled|min:10',
    paypal_mode: 'required_with:paypal_key|min:5|max:10'
  }
}
