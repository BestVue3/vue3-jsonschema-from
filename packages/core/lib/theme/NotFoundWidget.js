"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("../types");

var _default = (0, _vue.defineComponent)({
  name: 'NotFoundWidget',
  props: _types.CommonWidgetPropsDefine,
  setup: function setup(props) {
    return function () {
      var schema = props.schema,
          path = props.path,
          uiSchema = props.uiSchema;
      return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("p", {
        "style": {
          color: 'red'
        }
      }, [(0, _vue.createTextVNode)("Widget Not Found")]), (0, _vue.createVNode)("ul", null, [(0, _vue.createVNode)("li", null, [(0, _vue.createTextVNode)("Schema Path: "), path]), (0, _vue.createVNode)("li", null, [(0, _vue.createTextVNode)("Schema Type: "), schema.type]), (0, _vue.createVNode)("li", null, [(0, _vue.createTextVNode)("Widget: "), uiSchema.widget])])]);
    };
  }
});

exports["default"] = _default;