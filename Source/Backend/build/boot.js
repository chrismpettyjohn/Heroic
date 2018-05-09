'use strict';

var _heroic = require('./app/heroic');

var _heroic2 = _interopRequireDefault(_heroic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.stdout.write('\x1B[2J');
new _heroic2.default();