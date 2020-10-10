"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderItem = renderItem;

var _vue = require("vue");

var _FormItem = _interopRequireDefault(require("./FormItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderItem(props, renderChildren) {
  var errors = props.errors,
      title = props.title,
      path = props.path,
      required = props.required,
      requiredError = props.requiredError,
      uiSchema = props.uiSchema;
  var id = "vjsf-".concat(path);
  return (0, _vue.createVNode)(_FormItem["default"], {
    "id": id,
    "label": title,
    "errors": errors,
    "required": required,
    "requiredError": requiredError,
    "uiSchema": uiSchema
  }, {
    "default": function _default() {
      return [renderChildren(id)];
    }
  });
}