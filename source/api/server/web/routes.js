// Dependencies
import Server from '@/web/server'

// Route List
export default class Routing {
  static async init () {
    // Heroic
    await Server.route('GET', 'heroic', 'Heroic@read') // Get heroic settings
    // Session
    await Server.route('GET', 'session', 'Session@read', true) // Fetch user session
    await Server.route('POST', 'session', 'Session@create') // Login as user
    await Server.route('GET', 'session/client', 'Session@client', true) // Login to client
    // User
    await Server.route('POST', 'user', 'User@create') // Create user
    await Server.route('PATCH', 'user', 'User@update') // Update user
    await Server.route('GET', 'user/online', 'User@online') // Fetch online users
    await Server.route('GET', 'user/leaderboard', 'User@top') // Fetch top users
    await Server.route('GET', 'user/:user', 'User@read') // Find user by username or email
    await Server.route('GET', 'user/:user/:relations', 'User@read') // Fetch user^ (with relations)
    // User (Staff Routing)
    await Server.route('PATCH', 'auth/user', 'User@authUpdate', true, true) // Update user
    await Server.route('DELETE', 'auth/user/:id', 'User@authDelete', true, true) // Delete user
    // Camera
    await Server.route('GET', 'camera/:id', 'Camera@read') // Fetch photo by id
    await Server.route('GET', 'camera/:id/:relations', 'Camera@read') // Fetch photo (with relations)
    // Rooms
    await Server.route('GET', 'room/:id', 'Room@read') // Fetch room by id
    await Server.route('GET', 'room/:id/:relations', 'Room@read') // Fetch room (with relations)
    // Permission
    await Server.route('GET', 'permission/:id', 'Permission@read') // Fetch permission by id or type
    await Server.route('GET', 'permission/:id/:relations', 'Permission@read') // Fetch permission by id or type (with relations)
  }
}
