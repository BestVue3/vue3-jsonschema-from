"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vue3JsonschemaForm = require("vue3-jsonschema-form");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Radios = (0, _vue.defineComponent)({
  props: _objectSpread({}, _vue3JsonschemaForm.CommonWidgetPropsDefine),
  setup: function setup(props) {
    var handleChange = function handleChange(event) {
      // debugger
      var target = event.target;
      var value = target.value;
      props.onChange(value);
    };

    return function () {
      var options = props.options,
          id = props.id;
      var _options$enumOptions = options.enumOptions,
          enumOptions = _options$enumOptions === void 0 ? [] : _options$enumOptions;
      return (0, _vue.createVNode)("div", null, [enumOptions.map(function (o, index) {
        return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("input", {
          "type": "radio",
          "value": o.value,
          "checked": props.value === o.value,
          "name": id,
          "onClick": handleChange
        }, null), (0, _vue.createVNode)("label", null, [o.key])]);
      })]);
    };
  }
}); // export function withCommonRadios(Comp: any) {
//   return defineComponent({
//     name: 'WithRadioWrapper',
//     props: CommonWidgetPropsDefine,
//     setup(props) {
//       return () => {
//         const { schema, uiSchema, value, onChange, path } = props
//         const children = <Comp {...props} />
//         if (
//           schema.type === SchemaTypes.INTEGER ||
//           schema.type === SchemaTypes.NUMBER ||
//           schema.type === SchemaTypes.STRING
//         ) {
//           const widget = uiSchema && uiSchema.widget
//           // widget first
//           if (widget && widget !== 'radio') return children
//           if (schema.enum || schema.enumKeyValue) {
//             const options = schema.enumKeyValue
//               ? schema.enumKeyValue
//               : (schema as any).enum.map((k: any) => ({
//                   key: k,
//                   value: k,
//                 }))
//             return renderItem(props, () => (
//               <Radios
//                 options={options}
//                 value={value}
//                 onChange={onChange}
//                 name={path}
//               />
//             ))
//           } else {
//             return children
//           }
//         } else {
//           return children
//         }
//       }
//     },
//   })
// }

var _default = Radios;
exports["default"] = _default;