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
    // Camera
    await _server2.default.route('GET', 'camera/:id', 'Camera@read'); // Fetch photo by id
    await _server2.default.route('GET', 'camera/:id/:relations', 'Camera@read'); // Fetch photo (with relations)
    // Rooms
    await _server2.default.route('GET', 'room/:id', 'Room@read'); // Fetch room by id
    await _server2.default.route('GET', 'room/:id/:relations', 'Room@read'); // Fetch room (with relations)
    // Permission
    await _server2.default.route('GET', 'permission/:id', 'Permission@read'); // Fetch permission by id or type
    await _server2.default.route('GET', 'permission/:id/:relations', 'Permission@read'); // Fetch permission by id or type (with relations)
  }
}
exports.default = Routing; // Dependencies