'use strict';

var _heroic = require('./server/heroic');

var _heroic2 = _interopRequireDefault(_heroic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.stdout.write('\x1B[2J\x1B[0f');
_heroic2.default.init();