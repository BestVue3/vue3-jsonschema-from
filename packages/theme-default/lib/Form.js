"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var useStyles = (0, _vueJss.createUseStyles)({
  form: {
    '& *': {
      boxSizing: 'border-box'
    }
  }
});

var _default = (0, _vue.defineComponent)({
  name: 'Form',
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var classesRef = useStyles();
    return function () {
      var classes = classesRef.value;
      return (0, _vue.createVNode)("form", {
        "class": classes.form
      }, [slots["default"] && slots["default"]()]);
    };
  }
});

exports["default"] = _default;