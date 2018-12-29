import Model from '@/database/model'

class Settings extends Model {

  static get tableName () {
    return 'heroic_settings'
  }

  static get visible () {
    return [
      'site.name',
      'site.link',
      'server.ip',
      'server.port',
      'license.user',
      'swf.base',
      'swf.config',
      'user.motto',
      'user.look',
      'user.gender',
      'user.rank',
      'user.credits',
      'user.pixels',
      'user.points',
      'user.home'
    ]
  }

}

export default Settings