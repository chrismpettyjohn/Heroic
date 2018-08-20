// Dependencies
import Server from '@/web/server'
export default class Routing {
  static async init() {
    // Heroic 
    await Server.route('GET', 'heroic', 'Heroic@read') // Get heroic settings
    // User
    await Server.route('POST', 'user', 'User@create') // Create user
    await Server.route('GET', 'user/:user','User@read') // Find user by username or email
    await Server.route('GET', 'user/:user/:relationships','User@read') // Find user - with relationship attachment
    // Session
    await Server.route('POST', 'session', 'Session@create') // Login as user
  }
}