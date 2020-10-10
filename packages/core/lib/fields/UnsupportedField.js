"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _default = (0, _vue.defineComponent)({
  name: 'UnsupportedField',
  props: {
    schema: {
      type: Object,
      required: true
    },
    reason: {
      type: String,
      required: true
    }
  },
  setup: function setup() {
    return function () {
      return (0, _vue.createVNode)("div", null, [(0, _vue.createTextVNode)("unsupported")]);
    };
  }
});

exports["default"] = _default;