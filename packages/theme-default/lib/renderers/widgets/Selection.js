"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCommonSelection = withCommonSelection;
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _vueJss = require("vue-jss");

var _types = require("../../types");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _vueJss.createUseStyles)({
  select: {
    width: '100%',
    outline: 'none',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede'
  },
  option: {
    padding: 10
  }
});
var Selection = (0, _vue.defineComponent)({
  name: 'Selection',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [Array, Number, String, Object]
    },
    onChange: {
      type: Function,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean
    }
  },
  setup: function setup(props) {
    var classesRef = useStyles();
    /**
     * because `selected={bool}` not work correctly
     * so we chose `v-model` to make this simple
     */

    var currentValueRef = (0, _vue.ref)(props.value);
    (0, _vue.watch)(currentValueRef, function (v) {
      if (v !== props.value) {
        props.onChange(v);
      }
    });
    (0, _vue.watch)(function () {
      return props.value;
    }, function (v) {
      if (v !== currentValueRef.value) {
        currentValueRef.value = v;
      }
    });
    return function () {
      var id = props.id,
          options = props.options,
          multiple = props.multiple;
      var classes = classesRef.value;
      return _vue.withDirectives(_vue.createVNode("select", {
        "id": id,
        "multiple": multiple,
        "class": classes.select,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return currentValueRef.value = $event;
        }
      }, [options.map(function (o, index) {
        return _vue.createVNode("option", {
          "value": o.value,
          "class": classes.option,
          "key": index
        }, [o.key]);
      })]), [[_vue.vModelSelect, currentValueRef.value]]);
    };
  }
});

function getEnumOptions(schema) {
  if (schema.enumKeyValue) return schema.enumKeyValue;
  if (schema["enum"]) return schema["enum"].map(function (k) {
    return {
      key: k,
      value: k
    };
  });
  return [];
}

function withCommonSelection(Comp) {
  return (0, _vue.defineComponent)({
    name: 'WithSelectionWrapper',
    props: _types.CommonRendererPropsDefine,
    setup: function setup(props) {
      return function () {
        var schema = props.schema,
            uiSchema = props.uiSchema,
            onChange = props.onChange,
            value = props.value;
        var widget = uiSchema && uiSchema.widget;

        if (schema && (schema["enum"] || schema.enumKeyValue) && (!widget || widget === 'selection')) {
          // render selection
          var options = getEnumOptions(schema);
          return (0, _utils.renderItem)(props, function (id) {
            return _vue.createVNode(Selection, {
              "options": options,
              "onChange": onChange,
              "value": value,
              "id": id,
              "multiple": false
            }, null);
          });
        }

        return _vue.createVNode(Comp, props, null);
      };
    }
  });
}

var _default = Selection;
exports["default"] = _default;