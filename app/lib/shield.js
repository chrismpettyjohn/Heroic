// Database Errors
class UserNotFound {
  constructor(message) {
    console.log(`Could not find ${message} in the system!`)
  }
}

module.exports = {
  UserNotFound
}
