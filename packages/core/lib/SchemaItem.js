"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("./types");

var _utils = require("./utils");

var _fields = require("./fields");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COMPONENT_TYPES = {
  array: 'ArrayField',
  "boolean": 'BooleanField',
  integer: 'NumberField',
  number: 'NumberField',
  object: 'ObjectField',
  string: 'StringField',
  "null": 'NullField'
};
var FIELDS = {
  ArrayField: _fields.ArrayField,
  StringField: _fields.StringField,
  NumberField: _fields.NumberField,
  IntegerField: _fields.NumberField,
  ObjectField: _fields.ObjectField,
  BooleanField: _fields.BooleanField
};

function getFieldComponent(schema, uiSchema) {
  // const field = uiSchema["ui:field"];
  // if (typeof field === "function") {
  //   return field;
  // }
  // if (typeof field === "string" && field in fields) {
  //   return fields[field];
  // }
  var componentName = COMPONENT_TYPES[(0, _utils.getSchemaType)(schema)]; // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
  // render a field and let the MultiSchemaField component handle the form display

  if (!componentName && (schema.anyOf || schema.oneOf)) {
    return function () {
      return null;
    };
  }

  return componentName in FIELDS ? FIELDS[componentName] : function () {
    // const { UnsupportedField } = fields;
    return (0, _vue.createVNode)(_fields.UnsupportedField, {
      "schema": schema,
      "reason": "Unknown field type ".concat(schema.type)
    }, null);
  };
} // const StringRenderer = () => <div>123</div>


var _default = (0, _vue.defineComponent)({
  name: 'SchemaItem',
  props: _types.CommonFieldPropsDefine,
  setup: function setup(props) {
    // const formContextRef = useVJSFContext()
    var schemaRef = (0, _vue.computed)(function () {
      return (0, _utils.retrieveSchema)(props.schema, props.rootSchema, props.value);
    });
    return function () {
      var uiSchema = props.uiSchema;
      var schema = schemaRef.value; // const formContext = formContextRef.value
      // console.log(schema)
      // let Component: any

      if (!schema.type) {
        console.warn("it's better to give every schema a type:", schema);
      } // const type = schema.type || getSchemaType(schema)


      var FiledComponent = getFieldComponent(schema, uiSchema); // switch (type) {
      //   case SchemaTypes.STRING:
      //     Component = StringField
      //     break
      //   case SchemaTypes.NUMBER:
      //   case SchemaTypes.INTEGER:
      //     Component = NumberField
      //     break
      //   case SchemaTypes.ARRAY:
      //     Component = ArrayField
      //     break
      //   case SchemaTypes.OBJECT:
      //     Component = ObjectField
      //     break
      //   case SchemaTypes.BOOLEAN:
      //     Component = BooleanField
      //     break
      //   default:
      //     console.log('type is not right')
      //     return null
      // }

      console.log((0, _vue.toRaw)(schema));
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(FiledComponent, _objectSpread(_objectSpread({}, props), {}, {
        "schema": schema
      }), null), schema.anyOf && !(0, _utils.isSelect)(schema) && (0, _vue.createVNode)(_fields.MultiSchemaField, _objectSpread(_objectSpread({}, props), {}, {
        "options": schema.anyOf,
        "baseType": schema.type
      }), null), schema.oneOf && !(0, _utils.isSelect)(schema) && (0, _vue.createVNode)(_fields.MultiSchemaField, _objectSpread(_objectSpread({}, props), {}, {
        "options": schema.oneOf,
        "baseType": schema.type
      }), null)]);
    };
  }
});

exports["default"] = _default;