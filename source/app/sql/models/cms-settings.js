import Model from '~/app/sql/model'
export default class Settings extends Model {
  static tableName = 'cms_settings';
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

}
