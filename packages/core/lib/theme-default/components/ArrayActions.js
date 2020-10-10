"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _up = _interopRequireDefault(require("./icons/up"));

var _down = _interopRequireDefault(require("./icons/down"));

var _delete = _interopRequireDefault(require("./icons/delete"));

var _add = _interopRequireDefault(require("./icons/add"));

var _vueJss = require("vue-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      return _vue.createVNode("div", {
        "class": classes.container
      }, [index < length - 1 && _vue.createVNode("a", {
        "class": classes.action,
        "onClick": onDown
      }, [_vue.createVNode(_down["default"], null, null)]), index > 0 && _vue.createVNode("a", {
        "class": classes.action,
        "onClick": onUp
      }, [_vue.createVNode(_up["default"], null, null)]), _vue.createVNode("a", {
        "class": classes.action,
        "onClick": onDelete
      }, [_vue.createVNode(_delete["default"], null, null)]), _vue.createVNode("a", {
        "class": classes.action,
        "onClick": onAdd
      }, [_vue.createVNode(_add["default"], null, null)])]);
    };
  }
});

exports["default"] = _default;