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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  name: 'StringRenderer',
  props: _types.CommonWidgetPropsDefine,
  setup: function setup(props) {
    var classesRef = useStyles();

    var handleChange = function handleChange(e) {
      props.onChange(e.target.value);
    };

    return function () {
      var classes = classesRef.value;
      var value = props.value,
          uiSchema = props.uiSchema;
      var widget = getWidget(props.uiSchema); // const id = `vjsf-${path}`

      return (0, _utils.renderItem)(props, function (id) {
        var commonProps = {
          "class": classes.input,
          id: id,
          value: value || '',
          onInput: handleChange
        };
        return widget === 'textarea' ? _vue.createVNode("textarea", _vue.mergeProps(commonProps, {
          "rows": 5
        }), null) : _vue.createVNode("input", _vue.mergeProps(commonProps, {
          "type": widget || 'text'
        }), null);
      });
    };
  }
});

exports["default"] = _default;