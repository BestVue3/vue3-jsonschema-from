"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaFormPropsDefine = exports.CommonWidgetPropsDefine = exports.CommonFieldPropsDefine = exports.SchemaTypes = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SchemaTypes;
exports.SchemaTypes = SchemaTypes;

(function (SchemaTypes) {
  SchemaTypes["NUMBER"] = "number";
  SchemaTypes["INTEGER"] = "integer";
  SchemaTypes["STRING"] = "string";
  SchemaTypes["OBJECT"] = "object";
  SchemaTypes["ARRAY"] = "array";
  SchemaTypes["BOOLEAN"] = "boolean";
})(SchemaTypes || (exports.SchemaTypes = SchemaTypes = {}));

var CommonFieldPropsDefine = {
  id: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  value: {
    required: true
  },
  schema: {
    type: Object,
    required: true
  },
  rootSchema: {
    type: Object,
    required: true
  },
  uiSchema: {
    type: Object,
    required: true
  },
  onChange: {
    type: Function,
    required: true
  },
  // requiredError: {
  //   type: Boolean as PropType<boolean>,
  //   required: true,
  // },
  required: {
    type: Boolean,
    required: true
  },
  isDependenciesKey: {
    type: Boolean,
    required: true
  },
  errorSchema: {
    type: Object,
    required: true
  }
};
exports.CommonFieldPropsDefine = CommonFieldPropsDefine;

var CommonWidgetPropsDefine = _objectSpread(_objectSpread({}, CommonFieldPropsDefine), {}, {
  title: {
    type: String,
    required: true
  },
  errors: {
    type: Array
  },
  options: {
    type: Object,
    required: true
  }
});

exports.CommonWidgetPropsDefine = CommonWidgetPropsDefine;
var SchemaFormPropsDefine = {
  schema: {
    type: Object,
    required: true
  },
  uiSchema: {
    type: Object
  },
  value: {
    type: [String, Number, Boolean, Object, Array]
  },
  onChange: {
    type: Function,
    required: true
  },
  formProps: {
    type: Object
  },
  plugins: {
    type: Array
  },
  locale: {
    type: String,
    "default": 'zh'
  },
  ajvInstanceOptions: {
    type: Object
  },

  /**
   * use this to provide owner `doValidate`
   */
  contextRef: {
    type: Object
  }
};
exports.SchemaFormPropsDefine = SchemaFormPropsDefine;