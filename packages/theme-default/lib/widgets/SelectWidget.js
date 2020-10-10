"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var _types = require("../types");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: _objectSpread(_objectSpread({}, _types.CommonWidgetPropsDefine), {}, {
    // enumOptions: {
    //   type: Array as PropType<
    //     {
    //       key: string | number
    //       value: string | number
    //     }[]
    //   >,
    //   required: true,
    // },
    multiple: {
      type: Boolean
    }
  }),
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
          options = props.options;
      var classes = classesRef.value;
      var _options$enumOptions = options.enumOptions,
          enumOptions = _options$enumOptions === void 0 ? [] : _options$enumOptions;
      return (0, _utils.renderItem)(props, function () {
        return (0, _vue.withDirectives)((0, _vue.createVNode)("select", {
          "id": id,
          "multiple": options.multiple,
          "class": classes.select,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return currentValueRef.value = $event;
          }
        }, [enumOptions.map(function (o, index) {
          return (0, _vue.createVNode)("option", {
            "value": o.value,
            "class": classes.option,
            "key": index
          }, [o.key]);
        })]), [[_vue.vModelSelect, currentValueRef.value]]);
      });
    };
  }
}); // function getEnumOptions(schema: Schema) {
//   if (schema.enumKeyValue) return schema.enumKeyValue
//   if (schema.enum) return schema.enum.map(k => ({ key: k, value: k }))
//   return []
// }
// export function withCommonSelection(Comp: any) {
//   return defineComponent({
//     name: 'WithSelectionWrapper',
//     props: CommonWidgetPropsDefine,
//     setup(props) {
//       return () => {
//         const { schema, uiSchema, onChange, value } = props
//         const widget = uiSchema && uiSchema.widget
//         if (
//           schema &&
//           (schema.enum || schema.enumKeyValue) &&
//           (!widget || widget === 'selection')
//         ) {
//           // render selection
//           const options = getEnumOptions(schema)
//           return renderItem(props, id => (
//             <Selection
//               options={options}
//               onChange={onChange}
//               value={value as any}
//               id={id}
//               multiple={false}
//             />
//           ))
//         }
//         return <Comp {...props} />
//       }
//     },
//   })
// }

var _default = Selection;
exports["default"] = _default;