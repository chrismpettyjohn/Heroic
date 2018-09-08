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
    await Server.route('GET', 'session/timeline/:relations', 'Session@timeline', true) // Fetch timeline
    await Server.route('GET', 'session/timeline/:relations/:page', 'Session@timeline', true) // Fetch timeline (with page)
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
    // Posts
    await Server.route('POST', 'post', 'Post@create', true) // Creates post
    await Server.route('GET', 'post/:id', 'Post@read') // Fetch post
    await Server.route('GET', 'post/:id/:relations', 'Post@read') // Fetch with (with relations)
    await Server.route('PATCH', 'post/:id', 'Post@update', true) // Updates post
    await Server.route('DELETE', 'post/:id', 'Post@delete', true) // Deletes post
    // Comments
    await Server.route('POST', 'comment', 'Comment@create', true) // Create comment
    await Server.route('GET', 'comment/:id', 'Comment@read') // Fetch comment
    await Server.route('GET', 'comment/:id/:relations', 'Comment@read') // Fetch comment (with relations)
    await Server.route('PATCH', 'comment/:id', 'Comment@update', true) // Update comment
    await Server.route('DELETE', 'comment/:id', 'Comment@delete', true) // Delete comment
    // Likes
    await Server.route('GET', 'like/:parent/:type', 'Like@handle', true) // Handles like functionality
    // Camera
    await Server.route('GET', 'camera/:id', 'Camera@read') // Fetch photo by id
    await Server.route('GET', 'camera/:id/:relations', 'Camera@read') // Fetch photo (with relations)
    // Rooms
    await Server.route('GET', 'room/:id', 'Room@read') // Fetch room by id
    await Server.route('GET', 'room/:id/:relations', 'Room@read') // Fetch room (with relations)
    // Permission
    await Server.route('GET', 'permission/:id', 'Permission@read') // Fetch permission by id or type
    await Server.route('GET', 'permission/:id/:relations', 'Permission@read') // Fetch permission by id or type (with relations)
    // News Articles
    await Server.route('GET', 'article/:id', 'Article@read') // Fetch article
    await Server.route('GET', 'article/:id/:relations', 'Article@read') // Fetch article (with relations)
    // News Articles (Staff Routing)
    await Server.route('POST', 'auth/article', 'Article@authCreate') // Create article
    await Server.route('PATCH', 'auth/article', 'Article@authUpdate') // Update article
    await Server.route('DELETE', 'auth/article/:id', 'Article@authDelete') // Delete article
    // News Categories
    await Server.route('GET', 'category/:id', 'Category@read') // Fetch category
    await Server.route('GET', 'category/:id/:relations', 'Category@read') // Fetch category (with relations)
  }
}
