"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCommonRadios = withCommonRadios;
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _vue3JsonschemaForm = require("vue3-jsonschema-form");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Radios = (0, _vue.defineComponent)({
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {},
    onChange: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var handleChange = function handleChange(event) {
      // debugger
      var target = event.target;
      var value = target.value;
      props.onChange(value);
    };

    return function () {
      console.log(props.value);
      var options = props.options;
      return _vue.createVNode("div", null, [options.map(function (o, index) {
        return _vue.createVNode("div", null, [_vue.createVNode("input", {
          "type": "radio",
          "value": o.value,
          "checked": props.value === o.value,
          "name": name,
          "onClick": handleChange
        }, null), _vue.createVNode("label", null, [o.key])]);
      })]);
    };
  }
});

function withCommonRadios(Comp) {
  return (0, _vue.defineComponent)({
    name: 'WithRadioWrapper',
    props: _vue3JsonschemaForm.CommonWidgetPropsDefine,
    setup: function setup(props) {
      return function () {
        var schema = props.schema,
            uiSchema = props.uiSchema,
            value = props.value,
            onChange = props.onChange,
            path = props.path;

        var children = _vue.createVNode(Comp, props, null);

        if (schema.type === _vue3JsonschemaForm.SchemaTypes.INTEGER || schema.type === _vue3JsonschemaForm.SchemaTypes.NUMBER || schema.type === _vue3JsonschemaForm.SchemaTypes.STRING) {
          var widget = uiSchema && uiSchema.widget; // widget first

          if (widget && widget !== 'radio') return children;

          if (schema["enum"] || schema.enumKeyValue) {
            var options = schema.enumKeyValue ? schema.enumKeyValue : schema["enum"].map(function (k) {
              return {
                key: k,
                value: k
              };
            });
            return (0, _utils.renderItem)(props, function () {
              return _vue.createVNode(Radios, {
                "options": options,
                "value": value,
                "onChange": onChange,
                "name": path
              }, null);
            });
          } else {
            return children;
          }
        } else {
          return children;
        }
      };
    }
  });
}

var _default = Radios;
exports["default"] = _default;