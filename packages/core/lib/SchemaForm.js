"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _theme = require("./theme");

var _Context = require("./Context");

var _validator = require("./validator");

var _SchemaItem = _interopRequireDefault(require("./SchemaItem"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var i18n = require('ajv-i18n');

function transformeOptions(props) {
  return (0, _vue.computed)(function () {
    var ajvInstanceOptions = props.ajvInstanceOptions,
        plugins = props.plugins; // debugger

    var ajvOptions = {
      options: ajvInstanceOptions || {},
      formats: [],
      keywords: []
    };
    /**
     * TODO: 是否需要默认的map
     */

    var formatMaps = {
      string: {},
      number: {}
    };
    var keywordTransforms = {};
    var innerPlugins = plugins ? Array.isArray(plugins) ? plugins : [plugins] : [];
    innerPlugins.forEach(function (plugin) {
      var customFormats = plugin.customFormats,
          customKeywords = plugin.customKeywords;

      if (customFormats && Array.isArray(customFormats)) {
        customFormats.forEach(function (_ref) {
          var name = _ref.name,
              definition = _ref.definition,
              component = _ref.component;
          var type = definition && definition.type;

          if (component) {
            if (type) formatMaps[type][name] = component;else {
              formatMaps.string[name] = component;
              formatMaps.number[name] = component;
            }
          }

          var formats = ajvOptions.formats || [];
          formats.push({
            name: name,
            definition: definition
          });
        });
      }

      if (customKeywords && Array.isArray(customKeywords)) {
        customKeywords.forEach(function (_ref2) {
          var name = _ref2.name,
              definition = _ref2.definition,
              transformSchema = _ref2.transformSchema;
          var keywords = ajvOptions.keywords || [];
          keywords.push({
            name: name,
            definition: definition
          });

          if (transformSchema && typeof transformSchema === 'function') {
            if (keywordTransforms[name]) {
              console.warn("keyword ".concat(name, " already registered, please conside change to another keyword"));
            }

            keywordTransforms[name] = transformSchema;
          }
        });
      }
    });
    return {
      ajvOptions: ajvOptions,
      formatMaps: formatMaps,
      keywordTransforms: keywordTransforms
    };
  });
}

var _default2 = (0, _vue.defineComponent)({
  name: 'JsonSchemaForm',
  props: _types.SchemaFormPropsDefine,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    var Form = (0, _theme.useComponent)(_theme.ThemeLayoutsNames.Form);
    /**
     * TODO: change of props.value & props.schema should reset errors?
     */

    var formErrorsRef = (0, _vue.ref)({
      errors: [],
      errorSchema: {
        __errors: []
      }
    });

    var handleChange = function handleChange(value) {
      var onChange = props.onChange;
      onChange(value); // return (value: any) => {
      //   onChange(value)
      // }
    };

    var transformedOptions = transformeOptions(props);
    var validator = (0, _vue.computed)(function () {
      var ajvOptions = transformedOptions.value.ajvOptions;
      return (0, _validator.createInstance)(ajvOptions);
    });
    var context = (0, _vue.computed)(function () {
      var locale = props.locale;
      var formatMaps = transformedOptions.value.formatMaps;
      var v = validator.value;
      return {
        formatMaps: formatMaps,
        SchemaItem: _SchemaItem["default"],
        validate: function validate(schema, data) {
          var valid = v.validate(schema, data);
          i18n[locale](v.errors);
          var errors = v.errors;
          return {
            valid: valid,
            errors: errors
          };
        }
      };
    });
    (0, _vue.provide)(_Context.VJSFContext, context);
    (0, _vue.watch)(function () {
      return props.contextRef;
    }, function (ref) {
      if ((0, _vue.isRef)(ref)) {
        ref.value = {
          doValidate: function doValidate() {
            var schema = props.schema,
                value = props.value,
                locale = props.locale;

            var _validateFormData = (0, _validator.validateFormData)((0, _vue.toRaw)(value), (0, _vue.toRaw)(schema), validator.value, locale),
                errorSchema = _validateFormData.errorSchema,
                errors = _validateFormData.errors;

            return {
              errorSchema: errorSchema,
              errors: errors,
              valid: errors.length === 0
            }; // try {
            //   const valid = validator.value.validate(props.schema, props.value)
            //   formErrorsRef.value = validator.value.errors || []
            //   i18n[props.locale](validator.value.errors)
            //   return {
            //     valid,
            //     errors: validator.value.errors
            //   }
            // } catch(err) {
            //   // TODO: add schemaError
            //   return {
            //     valid: false,
            //     errors: []
            //   }
            // }
          }
        };
      }
    }, {
      immediate: true
    });
    return function () {
      var formProps = props.formProps,
          value = props.value,
          schema = props.schema,
          uiSchema = props.uiSchema;
      var errorSchema = formErrorsRef.value.errorSchema;
      return (0, _vue.createVNode)(Form.value, formProps, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_SchemaItem["default"], {
            "id": "root",
            "required": false,
            "isDependenciesKey": false,
            "value": value,
            "rootSchema": schema,
            "uiSchema": uiSchema || {},
            "schema": schema,
            "path": "",
            "errorSchema": errorSchema,
            "onChange": handleChange
          }, null)];
        }
      });
    };
  }
});

exports["default"] = _default2;