'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Route List
class Routing {
  static async init() {
    // Heroic
    await _server2.default.route('GET', 'heroic', 'Heroic@read'); // Get heroic settings
    // Session
    await _server2.default.route('GET', 'session', 'Session@read', true); // Fetch user session
    await _server2.default.route('POST', 'session', 'Session@create'); // Login as user
    await _server2.default.route('GET', 'session/client', 'Session@client', true); // Login to client
    await _server2.default.route('GET', 'session/timeline/:relations', 'Session@timeline', true); // Fetch timeline
    await _server2.default.route('GET', 'session/timeline/:relations/:page', 'Session@timeline', true); // Fetch timeline (with page)
    // User
    await _server2.default.route('POST', 'user', 'User@create'); // Create user
    await _server2.default.route('PATCH', 'user', 'User@update'); // Update user
    await _server2.default.route('GET', 'user/online', 'User@online'); // Fetch online users
    await _server2.default.route('GET', 'user/leaderboard', 'User@top'); // Fetch top users
    await _server2.default.route('GET', 'user/:user', 'User@read'); // Find user by username or email
    await _server2.default.route('GET', 'user/:user/:relations', 'User@read'); // Fetch user^ (with relations)
    // User (Staff Routing)
    await _server2.default.route('PATCH', 'auth/user', 'User@authUpdate', true, true); // Update user
    await _server2.default.route('DELETE', 'auth/user/:id', 'User@authDelete', true, true); // Delete user
    // Posts
    await _server2.default.route('POST', 'post', 'Post@create', true); // Creates post
    await _server2.default.route('GET', 'post/:id', 'Post@read'); // Fetch post
    await _server2.default.route('GET', 'post/:id/:relations', 'Post@read'); // Fetch with (with relations)
    await _server2.default.route('PATCH', 'post/:id', 'Post@update', true); // Updates post
    await _server2.default.route('DELETE', 'post/:id', 'Post@delete', true); // Deletes post
    // Comments 
    await _server2.default.route('POST', 'comment', 'Comment@create', true); // Create comment
    await _server2.default.route('GET', 'comment/:id', 'Comment@read'); // Fetch comment 
    await _server2.default.route('GET', 'comment/:id/:relations', 'Comment@read'); // Fetch comment (with relations)
    await _server2.default.route('PATCH', 'comment/:id', 'Comment@update', true); // Update comment
    await _server2.default.route('DELETE', 'comment/:id', 'Comment@delete', true); // Delete comment
    // Likes
    await _server2.default.route('GET', 'like/:parent/:type', 'Like@handle', true); // Handles like functionality
    // Camera
    await _server2.default.route('GET', 'camera/:id', 'Camera@read'); // Fetch photo by id
    await _server2.default.route('GET', 'camera/:id/:relations', 'Camera@read'); // Fetch photo (with relations)
    // Rooms
    await _server2.default.route('GET', 'room/:id', 'Room@read'); // Fetch room by id
    await _server2.default.route('GET', 'room/:id/:relations', 'Room@read'); // Fetch room (with relations)
    // Permission
    await _server2.default.route('GET', 'permission/:id', 'Permission@read'); // Fetch permission by id or type
    await _server2.default.route('GET', 'permission/:id/:relations', 'Permission@read'); // Fetch permission by id or type (with relations)
    // News Articles
    await _server2.default.route('GET', 'article/:id', 'Article@read'); // Fetch article
    await _server2.default.route('GET', 'article/:id/:relations', 'Article@read'); // Fetch article (with relations)
    // News Articles (Staff Routing)
    await _server2.default.route('POST', 'auth/article', 'Article@authCreate'); // Create article
    await _server2.default.route('PATCH', 'auth/article', 'Article@authUpdate'); // Update article
    await _server2.default.route('DELETE', 'auth/article/:id', 'Article@authDelete'); // Delete article
    // News Categories
    await _server2.default.route('GET', 'category/:id', 'Category@read'); // Fetch category
    await _server2.default.route('GET', 'category/:id/:relations', 'Category@read'); // Fetch category (with relations)
  }
}
exports.default = Routing; // Dependencies