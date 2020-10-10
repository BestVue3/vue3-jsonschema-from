"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _vueJss = require("vue-jss");

var _utils = require("../utils");

var _types = require("../types");

var _types2 = require("../../types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _vueJss.createUseStyles)({
  input: {
    width: '100%',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede'
  }
});
var rangeKeyMap = {
  minimum: 'min',
  maximum: 'max',
  multipleOf: 'step'
};

function getRangeProps(schema, options) {
  var props = {};
  Object.keys(rangeKeyMap).forEach(function (k) {
    if (schema[k]) props[rangeKeyMap[k]] = schema[k];
  });
  return _objectSpread(_objectSpread({}, props), options);
}

var _default = (0, _vue.defineComponent)({
  name: 'StringRenderer',
  props: _types.CommonRendererPropsDefine,
  setup: function setup(props) {
    var classesRef = useStyles();

    var handleChange = function handleChange(e) {
      var value = e.target.value;
      var num = Number(value);

      if (Number.isNaN(num)) {
        value = undefined;
      } else {
        value = num;
      }

      props.onChange(value);
    };

    return function () {
      var classes = classesRef.value;
      var value = props.value,
          schema = props.schema,
          uiSchema = props.uiSchema; // const id = `vjsf-${path}`

      if (uiSchema && uiSchema.widget) {
        var widget = uiSchema.widget;
        var options = uiSchema.options;

        if (widget === 'range') {
          if (schema.type !== _types2.SchemaTypes.INTEGER) {
            console.warn("range should be used in integer type");
          }

          var opts = getRangeProps(schema, options);
          return (0, _utils.renderItem)(props, function (id) {
            return _vue.createVNode("input", _vue.mergeProps(opts, {
              "class": classes.input,
              "type": "range",
              "id": id,
              "value": value || '',
              "onInput": handleChange
            }), null);
          });
        }
      }

      return (0, _utils.renderItem)(props, function (id) {
        return _vue.createVNode("input", {
          "class": classes.input,
          "type": "number",
          "id": id,
          "value": value || '',
          "onInput": handleChange
        }, null);
      });
    };
  }
});

exports["default"] = _default;