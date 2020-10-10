"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCommonField = useCommonField;
exports.getUiSchema = void 0;

var _vue = require("vue");

var _theme = require("../theme");

var _Context = require("../Context");

var _types = require("../types");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getUiSchema = function getUiSchema(props) {
  var uiSchemaRef = (0, _vue.computed)(function () {
    var uiSchema = props.uiSchema;
    var vjsf = props.schema.vjsf;

    if (uiSchema && vjsf) {
      return _objectSpread(_objectSpread({}, vjsf), uiSchema);
    } else {
      return uiSchema || vjsf || {};
    }
  });
  return uiSchemaRef;
};

exports.getUiSchema = getUiSchema;

function getDefaultWidgetOfSchema(schema, type) {
  var defaultType = 'text';

  switch (type) {
    case _types.SchemaTypes.NUMBER:
    case _types.SchemaTypes.INTEGER:
      {
        defaultType = 'number';
        break;
      }

    case _types.SchemaTypes.STRING:
      {
        defaultType = 'text';
        break;
      }

    case _types.SchemaTypes.BOOLEAN:
      {
        defaultType = 'checkbox';
        break;
      }
  }

  return (0, _utils.isSelect)(schema) ? 'select' : defaultType;
} // TODO: resovle widgets


function useCommonField(props, type) {
  // const ComponentRef = useWidget(props.schema, name)
  var componentRef = (0, _vue.computed)(function () {
    var uiSchema = props.uiSchema;
    var widget = uiSchema.widget || getDefaultWidgetOfSchema(props.schema, type);
    var Widget = (0, _theme.useWidget)(props.schema, widget);
    return Widget.value; // const widget
  });
  var optionsRef = (0, _vue.computed)(function () {
    var schema = props.schema,
        uiSchema = props.uiSchema;
    var enumOptions = (0, _utils.isSelect)(schema) ? (0, _utils.optionsList)(schema) : [];
    return _objectSpread({
      enumOptions: enumOptions
    }, uiSchema);
  });
  var formContextRef = (0, _Context.useVJSFContext)();
  var formatRef = (0, _vue.computed)(function () {
    return props.schema.format;
  }); // const errorsRef = computed(() => {
  //   const errors = formContextRef.value.errors.filter(
  //     (e: any) => e.dataPath === props.path,
  //   )
  //   return errors
  // })

  var vjsfRef = (0, _vue.computed)(function () {
    var schema = props.schema,
        uiSchema = props.uiSchema;
    return uiSchema || schema.vjsf || {}; // return props.schema.vjsf || {}
  });
  var uiSchemaRef = getUiSchema(props);
  /* title about */

  var schemaTitleRef = (0, _vue.computed)(function () {
    var vjsf = uiSchemaRef.value;
    var schema = props.schema;
    return schema.title || (vjsf && vjsf.title ? vjsf.title : '');
  }); // const optionsRef = computed(() => {
  //   const { schema, uiSchema } = props
  // })
  // const titleRef = computed(() => {
  //   return schemaTitleRef.value || ''
  // })

  /* title about */

  var rendererPropsRef = (0, _vue.computed)(function () {
    return {
      id: props.id,
      value: props.value,
      // onChange: handleChangeRef.value,
      format: formatRef.value,
      schema: props.schema,
      uiSchema: uiSchemaRef.value,
      // errors: errorsRef.value,
      title: schemaTitleRef.value,
      required: props.required,
      // requiredError: props.requiredError,
      rootSchema: props.rootSchema,
      // description: props.description,
      // vjsf: props.schema.vjsf,
      path: props.path,
      isDependenciesKey: props.isDependenciesKey,
      // TODO: handle options
      options: optionsRef.value,
      errors: props.errorSchema && props.errorSchema.__errors || []
    };
  });
  return {
    rendererPropsRef: rendererPropsRef,
    componentRef: componentRef,
    vjsfRef: vjsfRef,
    schemaTitleRef: schemaTitleRef,
    formContextRef: formContextRef
  };
}