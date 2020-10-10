"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var useStyles = (0, _vueJss.createUseStyles)({
  header: {
    fontWeight: 100,
    fontSize: 26,
    margin: 0,
    padding: 0,
    borderBottom: '1px solid #eee',
    marginBottom: 10,
    '* + &': {
      marginTop: 20
    },
    '& &': {
      fontSize: 22
    }
  }
});

var _default = (0, _vue.defineComponent)({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var classesRef = useStyles();
    return function () {
      var classes = classesRef.value;
      return (0, _vue.createVNode)("h1", {
        "class": classes.header
      }, [props.title]);
    };
  }
});

exports["default"] = _default;