"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var _utils = require("../../utils");

var _types = require("../../types");

var _vue3JsonschemaForm = require("vue3-jsonschema-form");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _vueJss.createUseStyles)({
  input: {
    width: '100%',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
    resize: 'none'
  }
});

var getWidget = function getWidget(uiSchema) {
  return uiSchema && uiSchema.widget || '';
};

var _default = (0, _vue.defineComponent)({
  name: 'BaseInput',
  props: _types.CommonWidgetPropsDefine,
  setup: function setup(props) {
    var classesRef = useStyles();

    var handleChange = function handleChange(e) {
      props.onChange(e.target.value);
    };

    return function () {
      var classes = classesRef.value;
      var id = props.id,
          value = props.value,
          uiSchema = props.uiSchema,
          schema = props.schema;
      var defaultInputType = schema.type === _vue3JsonschemaForm.SchemaTypes.INTEGER || schema.type === _vue3JsonschemaForm.SchemaTypes.NUMBER ? 'number' : 'text';
      var widget = getWidget(props.uiSchema); // const id = `vjsf-${path}`

      return (0, _utils.renderItem)(props, function () {
        var commonProps = {
          "class": classes.input,
          id: id,
          value: value || '',
          onInput: handleChange
        };
        return widget === 'textarea' ? (0, _vue.createVNode)("textarea", _objectSpread(_objectSpread({}, commonProps), {}, {
          "rows": 5
        }), null) : (0, _vue.createVNode)("input", _objectSpread(_objectSpread({}, commonProps), {}, {
          "type": widget || defaultInputType
        }), null);
      });
    };
  }
});

exports["default"] = _default;