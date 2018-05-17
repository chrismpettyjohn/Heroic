import Database from '~/app/sql/interactors/permission'
export default class PermissionService {

  static check(user, rank) {
    return Database.hasUser(rank, user)
  }

}
