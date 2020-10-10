"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWidget = getWidget;
exports.BuiltInWidgets = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var BuiltInWidgets;
exports.BuiltInWidgets = BuiltInWidgets;

(function (BuiltInWidgets) {
  BuiltInWidgets["CheckboxWidget"] = "CheckboxWidget";
  BuiltInWidgets["CheckboxesWidget"] = "CheckboxesWidget";
  BuiltInWidgets["RadioWidget"] = "RadioWidget";
  BuiltInWidgets["SelectWidget"] = "SelectWidget";
  BuiltInWidgets["HiddenWidget"] = "HiddenWidget";
  BuiltInWidgets["TextWidget"] = "TextWidget";
  BuiltInWidgets["PasswordWidget"] = "PasswordWidget";
  BuiltInWidgets["EmailWidget"] = "EmailWidget";
  BuiltInWidgets["URLWidget"] = "URLWidget";
  BuiltInWidgets["TextareaWidget"] = "TextareaWidget";
  BuiltInWidgets["DateWidget"] = "DateWidget";
  BuiltInWidgets["DateTimeWidget"] = "DateTimeWidget";
  BuiltInWidgets["ColorWidget"] = "ColorWidget";
  BuiltInWidgets["RangeWidget"] = "RangeWidget";
  BuiltInWidgets["NumberWidget"] = "NumberWidget";
})(BuiltInWidgets || (exports.BuiltInWidgets = BuiltInWidgets = {}));

var widgetMap = {
  "boolean": {
    checkbox: BuiltInWidgets.CheckboxWidget,
    radio: BuiltInWidgets.RadioWidget,
    select: BuiltInWidgets.SelectWidget,
    hidden: BuiltInWidgets.HiddenWidget
  },
  string: {
    text: BuiltInWidgets.TextWidget,
    password: BuiltInWidgets.PasswordWidget,
    email: BuiltInWidgets.EmailWidget,
    hostname: BuiltInWidgets.TextWidget,
    ipv4: BuiltInWidgets.TextWidget,
    ipv6: BuiltInWidgets.TextWidget,
    uri: BuiltInWidgets.URLWidget,
    // 'data-url': BuiltInWidgets.FileWidget,
    radio: BuiltInWidgets.RadioWidget,
    select: BuiltInWidgets.SelectWidget,
    textarea: BuiltInWidgets.TextareaWidget,
    hidden: BuiltInWidgets.HiddenWidget,
    date: BuiltInWidgets.DateWidget,
    datetime: BuiltInWidgets.DateTimeWidget,
    'date-time': BuiltInWidgets.DateTimeWidget,
    color: BuiltInWidgets.ColorWidget
  },
  number: {
    text: BuiltInWidgets.TextWidget,
    select: BuiltInWidgets.SelectWidget,
    number: BuiltInWidgets.NumberWidget,
    range: BuiltInWidgets.RangeWidget,
    radio: BuiltInWidgets.RadioWidget,
    hidden: BuiltInWidgets.HiddenWidget
  },
  integer: {
    text: BuiltInWidgets.TextWidget,
    select: BuiltInWidgets.SelectWidget,
    number: BuiltInWidgets.NumberWidget,
    range: BuiltInWidgets.RangeWidget,
    radio: BuiltInWidgets.RadioWidget,
    hidden: BuiltInWidgets.HiddenWidget
  },
  array: {
    select: BuiltInWidgets.SelectWidget,
    checkboxes: BuiltInWidgets.CheckboxesWidget,
    // files: BuiltInWidgets.FileWidget,
    hidden: BuiltInWidgets.HiddenWidget
  }
}; // interface RegisteredWidgets {
//   [key: string]: WidgetComponentDefine
// }

function getWidget(schema, widget, // key of widgets | Component | key of some other string
registeredWidgets) {
  // direct pass Component to `uiSchema.widget`
  if (typeof widget === 'function' || (0, _utils.isObject)(widget) && (typeof widget.render === 'function' || typeof widget.setup === 'function' || typeof widget.template === 'string')) {
    return widget;
  }

  if (typeof widget !== 'string') {
    throw new Error("Unsupported widget definition: ".concat(_typeof(widget)));
  } // directlly use widget name


  if (registeredWidgets[widget]) {
    return registeredWidgets[widget];
  }

  var type = (0, _utils.getSchemaType)(schema);
  var typeWidgets = widgetMap[type];

  if (!typeWidgets) {
    return registeredWidgets.NotFoundWidget;
  }

  var widgetName = typeWidgets[widget];

  if (!registeredWidgets[widgetName]) {
    // throw new Error(`no widget found`)
    return registeredWidgets.NotFoundWidget;
  }

  return registeredWidgets[widgetName];
}