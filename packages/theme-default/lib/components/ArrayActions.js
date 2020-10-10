"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _up = _interopRequireDefault(require("./icons/up"));

var _down = _interopRequireDefault(require("./icons/down"));

var _delete = _interopRequireDefault(require("./icons/delete"));

var _add = _interopRequireDefault(require("./icons/add"));

var _vueJss = require("vue-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _vueJss.createUseStyles)(function (theme) {
  return {
    container: {
      display: 'flex'
    },
    action: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: theme.fontSize.input,
      '& + &': {
        marginLeft: 10
      }
    }
  };
});

var _default = (0, _vue.defineComponent)({
  props: {
    onDown: {
      type: Function,
      required: true
    },
    onUp: {
      type: Function,
      required: true
    },
    onDelete: {
      type: Function,
      required: true
    },
    onAdd: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  setup: function setup(props) {
    var classesRef = useStyles();
    return function () {
      var onDown = props.onDown,
          onUp = props.onUp,
          onAdd = props.onAdd,
          onDelete = props.onDelete,
          length = props.length,
          index = props.index;
      var classes = classesRef.value;
      return (0, _vue.createVNode)("div", {
        "class": classes.container
      }, [index < length - 1 && (0, _vue.createVNode)("a", {
        "class": classes.action,
        "onClick": onDown
      }, [(0, _vue.createVNode)(_down["default"], null, null)]), index > 0 && (0, _vue.createVNode)("a", {
        "class": classes.action,
        "onClick": onUp
      }, [(0, _vue.createVNode)(_up["default"], null, null)]), (0, _vue.createVNode)("a", {
        "class": classes.action,
        "onClick": onDelete
      }, [(0, _vue.createVNode)(_delete["default"], null, null)]), (0, _vue.createVNode)("a", {
        "class": classes.action,
        "onClick": onAdd
      }, [(0, _vue.createVNode)(_add["default"], null, null)])]);
    };
  }
});

exports["default"] = _default;