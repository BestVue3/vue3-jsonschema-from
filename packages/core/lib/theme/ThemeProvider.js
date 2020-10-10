"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeRendererComponentNames = exports.ThemeLayoutsNames = void 0;

var _vue = require("vue");

var _Context = require("./Context");

var _NotFoundWidget = _interopRequireDefault(require("./NotFoundWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderProps = {
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}; // export type FORM = 'Form' | string

var ThemeLayoutsNames;
exports.ThemeLayoutsNames = ThemeLayoutsNames;

(function (ThemeLayoutsNames) {
  ThemeLayoutsNames["Form"] = "Form";
  ThemeLayoutsNames["SingleTypeArrayWrapper"] = "SingleTypeArrayWrapper";
  ThemeLayoutsNames["Header"] = "Header";
})(ThemeLayoutsNames || (exports.ThemeLayoutsNames = ThemeLayoutsNames = {}));

var ThemeRendererComponentNames;
exports.ThemeRendererComponentNames = ThemeRendererComponentNames;

(function (ThemeRendererComponentNames) {
  ThemeRendererComponentNames["StringRenderer"] = "StringRenderer";
  ThemeRendererComponentNames["NumberRenderer"] = "NumberRenderer";
  ThemeRendererComponentNames["ArrayRenderer"] = "ArrayRenderer";
  ThemeRendererComponentNames["BooleanRenderer"] = "BooleanRenderer";
})(ThemeRendererComponentNames || (exports.ThemeRendererComponentNames = ThemeRendererComponentNames = {}));

var _default = (0, _vue.defineComponent)({
  name: "ThemeProvider",
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var components = (0, _vue.computed)(function () {
      var theme = props.theme;
      return {
        layouts: theme.layouts,
        widgets: _objectSpread(_objectSpread({}, theme.widgets), {}, {
          NotFoundWidget: _NotFoundWidget["default"]
        })
      };
    });
    (0, _vue.provide)(_Context.ComponentsContext, components);
    return function () {
      if (!slots["default"] || typeof slots["default"] !== 'function') {
        throw new Error("default slot of ThemeProvider should be function");
      }

      return slots["default"] && slots["default"]();
    };
  }
});

exports["default"] = _default;