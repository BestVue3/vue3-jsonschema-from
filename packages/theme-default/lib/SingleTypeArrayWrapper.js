"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var _ArrayActions = _interopRequireDefault(require("./components/ArrayActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      return (0, _vue.createVNode)("div", {
        "class": "vjsfDefaultThemeArrayItemContainer"
      }, [(0, _vue.createVNode)("div", {
        "class": classes.header
      }, [(0, _vue.createVNode)("span", null, [props.title + '#' + (props.index + 1)]), (0, _vue.createVNode)(_ArrayActions["default"], props, null)]), (0, _vue.createVNode)("div", {
        "class": classes.body
      }, [slots["default"] && slots["default"]()])]);
    };
  }
});

exports["default"] = _default;