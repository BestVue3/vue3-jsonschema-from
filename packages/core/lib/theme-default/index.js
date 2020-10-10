"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  StringRenderer: true,
  NumberRenderer: true,
  Form: true,
  FormItem: true,
  ArrayRenderer: true,
  BooleanRenderer: true,
  SingleTypeArray: true,
  Header: true,
  renderItem: true
};
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form["default"];
  }
});
Object.defineProperty(exports, "FormItem", {
  enumerable: true,
  get: function get() {
    return _FormItem["default"];
  }
});
Object.defineProperty(exports, "ArrayRenderer", {
  enumerable: true,
  get: function get() {
    return _ArrayRenderer["default"];
  }
});
Object.defineProperty(exports, "BooleanRenderer", {
  enumerable: true,
  get: function get() {
    return _BooleanRenderer["default"];
  }
});
Object.defineProperty(exports, "SingleTypeArray", {
  enumerable: true,
  get: function get() {
    return _SingleTypeArrayWrapper["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "renderItem", {
  enumerable: true,
  get: function get() {
    return _utils.renderItem;
  }
});
exports["default"] = exports.NumberRenderer = exports.StringRenderer = void 0;

var _Form = _interopRequireDefault(require("./Form"));

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _NumberRenderer = _interopRequireDefault(require("./renderers/NumberRenderer"));

var _StringRenderer = _interopRequireDefault(require("./renderers/StringRenderer"));

var _ArrayRenderer = _interopRequireDefault(require("./renderers/ArrayRenderer"));

var _BooleanRenderer = _interopRequireDefault(require("./renderers/BooleanRenderer"));

var _SingleTypeArrayWrapper = _interopRequireDefault(require("./SingleTypeArrayWrapper"));

var _Header = _interopRequireDefault(require("./Header"));

var _Selection = require("./renderers/widgets/Selection");

var _Radios = require("./renderers/widgets/Radios");

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StringRenderer = (0, _Radios.withCommonRadios)((0, _Selection.withCommonSelection)(_StringRenderer["default"]));
exports.StringRenderer = StringRenderer;
var NumberRenderer = (0, _Radios.withCommonRadios)((0, _Selection.withCommonSelection)(_NumberRenderer["default"]));
exports.NumberRenderer = NumberRenderer;
var _default = {
  components: {
    Form: _Form["default"],
    StringRenderer: StringRenderer,
    NumberRenderer: NumberRenderer,
    ArrayRenderer: _ArrayRenderer["default"],
    SingleTypeArray: _SingleTypeArrayWrapper["default"],
    BooleanRenderer: _BooleanRenderer["default"],
    Header: _Header["default"]
  }
};
exports["default"] = _default;