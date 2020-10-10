"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.theme = exports.layouts = exports.widgets = void 0;

var _vue = require("vue");

var _vue3JsonschemaForm = require("vue3-jsonschema-form");

var _Form = _interopRequireDefault(require("./Form"));

var _Header = _interopRequireDefault(require("./Header"));

var _SingleTypeArrayWrapper = _interopRequireDefault(require("./SingleTypeArrayWrapper"));

var _TextWidget = _interopRequireDefault(require("./widgets/TextWidget"));

var _TextareaWidget = _interopRequireDefault(require("./widgets/TextareaWidget"));

var _CheckboxesWidget = _interopRequireDefault(require("./widgets/CheckboxesWidget"));

var _RadioWidget = _interopRequireDefault(require("./widgets/RadioWidget"));

var _SelectWidget = _interopRequireDefault(require("./widgets/SelectWidget"));

var _NumberWidget = _interopRequireDefault(require("./widgets/NumberWidget"));

var _styleTheme = require("./style-theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var widgets = {
  TextWidget: _TextWidget["default"],
  TextareaWidget: _TextareaWidget["default"],
  CheckboxWidget: _TextWidget["default"],
  CheckboxesWidget: _CheckboxesWidget["default"],
  RadioWidget: _RadioWidget["default"],
  SelectWidget: _SelectWidget["default"],
  HiddenWidget: _TextWidget["default"],
  PasswordWidget: _TextWidget["default"],
  EmailWidget: _TextWidget["default"],
  URLWidget: _TextWidget["default"],
  DateWidget: _TextWidget["default"],
  DateTimeWidget: _TextWidget["default"],
  ColorWidget: _TextWidget["default"],
  RangeWidget: _TextWidget["default"],
  NumberWidget: _NumberWidget["default"]
};
exports.widgets = widgets;
var layouts = {
  Form: _Form["default"],
  Header: _Header["default"],
  SingleTypeArrayWrapper: _SingleTypeArrayWrapper["default"]
};
exports.layouts = layouts;
var theme = {
  widgets: widgets,
  layouts: layouts
};
exports.theme = theme;

function VjsfDefaultThemeProvider(props, _ref) {
  var slots = _ref.slots;
  return (0, _vue.createVNode)(_styleTheme.ThemeProvider, null, {
    "default": function _default() {
      return [(0, _vue.createVNode)(_vue3JsonschemaForm.ThemeProvider, {
        "theme": theme
      }, {
        "default": function _default() {
          return [slots["default"] && slots["default"]()];
        }
      })];
    }
  });
}

VjsfDefaultThemeProvider.props = {
  theme: {
    type: Object
  },
  styleTheme: {
    type: Object
  }
};
var _default2 = VjsfDefaultThemeProvider;
exports["default"] = _default2;