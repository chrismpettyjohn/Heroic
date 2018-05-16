import Model from '~/app/sql/model'
export default class Settings extends Model {
  static tableName = 'cms_settings';
  static identifiers = ['id'];
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

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [
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
    ],

    properties: {
      id: {
        type: 'integer'
      },
      site_name: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      },
      site_desc: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      },
      site_link: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      },
      server_ip: {
        type: 'ipv4'
      },
      server_port: {
        type: 'integer',
        minLength: 2,
        maxLength: 6
      },
      findretros_user: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      },
      store_enabled: {
        type: 'string',
        enum: ['0', '1']
      },
      paypal_key: {
        type: 'string',
        minLength: 1,
        maxLength: 255
      },
      paypal_mode: {
        type: 'string',
        enum: ['sandbox', 'client']
      },
      swf_base: {
        type: 'string',
        minLength: 1,
        maxLength: 25
      },
      swf_gamedata: {
        type: 'string',
        minLength: 1,
        maxLength: 25
      }
    }
  };

}
