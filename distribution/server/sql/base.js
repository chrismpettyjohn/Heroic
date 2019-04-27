'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objection = require('objection');

var _objectionVisibility = require('objection-visibility');

var _objectionVisibility2 = _interopRequireDefault(_objectionVisibility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const plugins = (0, _objection.compose)([_objectionVisibility2.default]);
class baseModel extends plugins(_objection.Model) {}
exports.default = baseModel;