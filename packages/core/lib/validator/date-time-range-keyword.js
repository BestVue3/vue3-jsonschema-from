"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangeKeyword = exports.DateTimeRangeKeyword = void 0;

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DateRangeKeyword = {
  type: 'boolean',
  compile: function compile(schema) {
    var items = schema.items;
    var type = schema.type;

    var validFun = function validFun() {
      return true;
    };

    if (type !== 'array' || !(0, _utils.isObject)(items)) {
      // throw new Error('date time range keyword should use single time array')
      return validFun;
    }

    var itemType = items.type;
    var itemFormat = items.format;

    if (itemType !== 'number' && itemType !== 'string' || itemFormat !== 'date' && itemFormat !== 'date-time') {
      // throw new Error('date time must be `number` or `string` type')
      return validFun;
    }

    return function (data) {
      var _data = _slicedToArray(data, 2),
          before = _data[0],
          after = _data[1];

      return Date.parse(before) <= Date.parse(after);
    };
  },
  macro: function macro() {
    return {
      minItems: 2,
      maxItems: 2
    };
  }
};
exports.DateRangeKeyword = DateRangeKeyword;
var DateTimeRangeKeyword = {
  type: 'boolean',
  compile: function compile(schema) {
    var items = schema.items;
    var type = schema.type;

    var validFun = function validFun() {
      return true;
    };

    if (type !== 'array' || !(0, _utils.isObject)(items)) {
      // throw new Error('date time range keyword should use single time array')
      return validFun;
    }

    var itemType = items.type;
    var itemFormat = items.format;

    if (itemType !== 'number' && itemType !== 'string' || itemFormat !== 'date' && itemFormat !== 'date-time' && itemFormat !== 'time') {
      // throw new Error('date time must be `number` or `string` type')
      return validFun;
    }

    return function (data) {
      var _data2 = _slicedToArray(data, 2),
          before = _data2[0],
          after = _data2[1];

      return Date.parse(before) <= Date.parse(after);
    };
  },
  macro: function macro() {
    return {
      minItems: 2,
      maxItems: 2
    };
  }
};
exports.DateTimeRangeKeyword = DateTimeRangeKeyword;