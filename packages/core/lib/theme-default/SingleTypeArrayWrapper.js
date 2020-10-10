"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _vueJss = require("vue-jss");

var _ArrayActions = _interopRequireDefault(require("./components/ArrayActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _vueJss.createUseStyles)(function (theme) {
  return {
    '@global': {
      '.vjsfDefaultThemeArrayItemContainer': {
        border: '1px solid #eee',
        '& + &': {
          marginTop: 10
        }
      }
    },
    header: {
      backgroundColor: '#eee',
      padding: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    body: {
      padding: 10,
      paddingBottom: 0
    }
  };
});

var _default = (0, _vue.defineComponent)({
  name: 'SingleTypeArrayWrapper',
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
    },
    title: {
      type: String,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var classesRef = useStyles();
    return function () {
      var classes = classesRef.value;
      return _vue.createVNode("div", {
        "class": "vjsfDefaultThemeArrayItemContainer"
      }, [_vue.createVNode("div", {
        "class": classes.header
      }, [_vue.createVNode("span", null, [props.title + '#' + (props.index + 1)]), _vue.createVNode(_ArrayActions["default"], props, null)]), _vue.createVNode("div", {
        "class": classes.body
      }, [slots["default"] && slots["default"]()])]);
    };
  }
});

exports["default"] = _default;