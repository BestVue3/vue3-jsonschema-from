"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var useStyles = (0, _vueJss.createUseStyles)({
  /* Styles applied to the root element. */
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: 'inherit',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
});

var _default = (0, _vue.defineComponent)({
  props: {
    onClick: {
      type: Function
    }
  },
  setup: function setup(p, _ref) {
    var slots = _ref.slots;
    var classesRef = useStyles();
    return function () {
      var classes = classesRef.value;
      return (0, _vue.createVNode)("svg", {
        "viewBox": "0 0 1024 1024",
        "class": classes.root
      }, [slots["default"] && slots["default"]()]);
    };
  }
});

exports["default"] = _default;