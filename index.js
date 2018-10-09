'use strict';

var _log = require('./lib/log');

var _log2 = _interopRequireDefault(_log);

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _heroic = require('./heroic');

var _heroic2 = _interopRequireDefault(_heroic);

var _system = require('./config/system');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Clear Console
process.stdout.write('\x1B[2J\x1B[0f');

// Handle primary course
if (_cluster2.default.isMaster) {
  for (let i = 0; i < _system2.default.advanced.workers; i++) {
    _cluster2.default.fork();
  }
} else {
  _heroic2.default.init();
}

// Event managers
_cluster2.default.on('online', worker => {});

_cluster2.default.on('exit', (worker, code, signal) => {
  _log2.default.push('System', '*', `Worker process ${_cluster2.default.worker.id} has stopped`, 'info');
});