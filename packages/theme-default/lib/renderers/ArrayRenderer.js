"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireWildcard(require("vue"));

var _types = require("../types");

var _utils = require("../utils");

var _Checkboxes = _interopRequireDefault(require("./widgets/Checkboxes"));

var _Selection = _interopRequireDefault(require("./widgets/Selection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const Props = {
//   ...CommonRendererPropsDefine,
//   multi: {
//     type: Boolean as PropType<boolean>,
//   },
//   options: {
//     type: Array as PropType<Option[]>,
//     required: true,
//   },
// } as const
var _default = (0, _vue.defineComponent)({
  name: 'ArrayRenderer',
  props: _types.CommonRendererPropsDefine,
  setup: function setup(props) {
    var isMultiSelectionRef = (0, _vue.computed)(function () {
      var schema = props.schema,
          uiSchema = props.uiSchema;
      var items = schema.items;
      return items && !Array.isArray(items) && (items["enum"] || items.enumKeyValue);
    });
    var optionsRef = (0, _vue.computed)(function () {
      var schema = props.schema;
      var items = schema.items || {};

      if (items["enum"]) {
        return items["enum"].map(function (s) {
          return {
            key: s,
            value: s
          };
        });
      } else if (items.enumKeyValue) {
        return items.enumKeyValue;
      }

      return [];
    });
    var widgetRef = (0, _vue.computed)(function () {
      var uiSchema = props.uiSchema;
      return uiSchema && uiSchema.widget;
    });

    var handleChange = function handleChange(v) {
      console.log(v);
      props.onChange(v);
    };

    return function () {
      var isMultiSelection = isMultiSelectionRef.value;
      var widget = widgetRef.value;
      var options = optionsRef.value;
      console.log('-------->', isMultiSelection); // widget is highest

      if (widget) {
        if (widget === 'checkbox') {
          return (0, _utils.renderItem)(props, function () {
            return _vue.createVNode(_Checkboxes["default"], {
              "options": options,
              "value": props.value,
              "onChange": props.onChange
            }, null);
          });
        }
      }

      if (isMultiSelection) {
        return (0, _utils.renderItem)(props, function (id) {
          return _vue.createVNode(_Selection["default"], {
            "id": id,
            "options": options,
            "multiple": true,
            "value": props.value,
            "onChange": handleChange
          }, null);
        });
      } // const { options, multi } = props
      // return renderItem(props, (id: string) => (
      //   <select multiple={!!multi} id={id}>
      //     {options.map(op => (
      //       <option value={op.value} key={op.key}>
      //         {op.key}
      //       </option>
      //     ))}
      //   </select>
      // ))

    };
  }
});

exports["default"] = _default;