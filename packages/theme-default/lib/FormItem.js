"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

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
      return props.errors;
    });
    return function () {
      var id = props.id,
          label = props.label,
          required = props.required;
      var helpText = helpTextRef.value;
      var classes = classesRef.value;
      var errorMessages = errorMessagesRef.value;
      var hasError = errorMessages.length > 0;
      return (0, _vue.createVNode)("div", {
        "class": classes.formItem
      }, [label && (0, _vue.createVNode)("label", {
        "for": id,
        "class": classes.label
      }, [(0, _vue.createVNode)("span", null, [label]), required ? (0, _vue.createVNode)("span", {
        "class": classes.required
      }, [(0, _vue.createTextVNode)(" *")]) : null]), (0, _vue.createVNode)("div", {
        "class": classes.inputField
      }, [slots["default"] && slots["default"]()]), hasError ? (0, _vue.createVNode)("p", {
        "class": classes.error
      }, [errorMessages[0]]) : (0, _vue.createVNode)("p", {
        "class": classes.helper
      }, [helpText])]);
    };
  }
});

exports["default"] = _default;