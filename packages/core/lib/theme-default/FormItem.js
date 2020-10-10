"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _vueJss = require("vue-jss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { UISchema } from '@/types'
var FormItemPropsDefine = {
  errors: {
    type: Array,
    "default": []
  },
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  requiredError: {
    type: Boolean
  },
  uiSchema: {
    type: Object
  }
};
var useStyles = (0, _vueJss.createUseStyles)(function (theme) {
  return {
    formItem: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'flex-start',
      '.vjsfDefaultThemeArrayItemContainer + &': {
        marginTop: 10
      }
    },
    inputField: {},
    label: {
      fontSize: theme.fontSize.label,
      fontWeight: 900
    },
    helper: {
      height: 30,
      fontSize: theme.fontSize.label,
      padding: 0,
      margin: 0,
      color: '#777'
    },
    error: {
      height: 30,
      fontSize: 12,
      padding: 0,
      margin: 0,
      color: '#d50606'
    },
    required: {
      color: '#d50606'
    }
  };
});

var _default = (0, _vue.defineComponent)({
  props: FormItemPropsDefine,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var classesRef = useStyles();
    var helpTextRef = (0, _vue.computed)(function () {
      return props.uiSchema && props.uiSchema.helpText;
    });
    var errorMessagesRef = (0, _vue.computed)(function () {
      var messages = props.errors ? props.errors.map(function (e) {
        return e.message;
      }) : [];
      if (props.requiredError) messages.push('required');
      return messages;
    });
    return function () {
      var id = props.id,
          label = props.label,
          required = props.required;
      var helpText = helpTextRef.value;
      var classes = classesRef.value;
      var errorMessages = errorMessagesRef.value;
      var hasError = errorMessages.length > 0;
      return _vue.createVNode("div", {
        "class": classes.formItem
      }, [label && _vue.createVNode("label", {
        "for": id,
        "class": classes.label
      }, [_vue.createVNode("span", null, [label]), required ? _vue.createVNode("span", {
        "class": classes.required
      }, [_vue.createTextVNode(" *")]) : null]), _vue.createVNode("div", {
        "class": classes.inputField
      }, [slots["default"] && slots["default"]()]), hasError ? _vue.createVNode("p", {
        "class": classes.error
      }, [errorMessages[0]]) : _vue.createVNode("p", {
        "class": classes.helper
      }, [helpText])]);
    };
  }
});

exports["default"] = _default;