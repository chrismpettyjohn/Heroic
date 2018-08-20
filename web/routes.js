// Dependencies
import Server from '@/web/server'

// Route List
export default class Routing {
  static async init () {
    // Heroic
    await Server.route('GET', 'heroic', 'Heroic@read') // Get heroic settings
    // User
    await Server.route('POST', 'user', 'User@create') // Create user
    await Server.route('GET', 'user/:user', 'User@read') // Find user by username or email
    await Server.route('GET', 'user/:user/:relations', 'User@read') // Find user - with relationship attachment
    // Session
    await Server.route('POST', 'session', 'Session@create') // Login as user
    await Server.route('GET', 'session/client', 'Session@client', true) // Login to client
    // News Articles
    await Server.route('GET', 'article/:id', 'Articles@read') // Fetch article
    await Server.route('GET', 'article/:id/:relations', 'Articles@read') // Fetch article (with relations)
    // News Categories
    await Server.route('GET', 'category/:id', 'Categories@read') // Fetch category
    await Server.route('GET', 'category/:id/:relations', 'Categories@read') // Fetch category (with relations)
  }
}
