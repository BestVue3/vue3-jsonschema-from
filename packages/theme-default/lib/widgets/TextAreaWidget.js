"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("../types");

var _BaseInput = _interopRequireDefault(require("./components/BaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vue.defineComponent)({
  name: 'TextareaWidget',
  props: _types.CommonWidgetPropsDefine,
  setup: function setup(props) {
    return function () {
      return (0, _vue.createVNode)(_BaseInput["default"], props, null);
    };
  }
});

exports["default"] = _default;