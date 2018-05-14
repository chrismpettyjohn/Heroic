import JWT from './user/jwt'
import Promise from './promise'
import Settings from './settings'
import Session from './user/session'
let app = angular.module('heroic.services', [])
app.service('JWTService', JWT)
app.service('SessionService', Session)
app.service('PromiseService', Promise)
app.service('SettingsService', Settings)
export default app
