"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("../types");

var _Context = require("../Context");

var _utils = require("../utils");

var _theme = require("../theme");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vue.defineComponent)({
  name: 'MultiSchemaField',
  props: _objectSpread(_objectSpread({}, _types.CommonFieldPropsDefine), {}, {
    options: {
      type: Array,
      required: true
    },
    baseType: {
      type: String,
      required: true
    }
  }),
  setup: function setup(props) {
    var state = (0, _vue.reactive)({
      selectedOption: 0
    });
    var formContextRef = (0, _Context.useVJSFContext)();
    var isValidRef = (0, _vue.computed)(function () {
      var validate = formContextRef.value.validate;
      return function (schema, data) {
        return validate(schema, data).valid;
      };
    });

    function getMatchingOptionLocal(data, options) {
      // const { rootSchema } = props
      var option = (0, _utils.getMatchingOption)(data, options, isValidRef.value);

      if (option !== 0) {
        return option;
      } // If the form data matches none of the options, use the currently selected
      // option, assuming it's available; otherwise use the first option


      return state.selectedOption || 0;
    }

    var onOptionChange = function onOptionChange(option) {
      var selectedOption = parseInt(option, 10);
      var value = props.value,
          onChange = props.onChange,
          options = props.options;
      var rootSchema = props.rootSchema;
      var newOption = (0, _utils.retrieveSchema)(options[selectedOption], rootSchema, value); // If the new option is of type object and the current data is an object,
      // discard properties added using the old option.

      var newFormData = undefined;

      if ((0, _utils.guessType)(value) === 'object' && (newOption.type === 'object' || newOption.properties)) {
        newFormData = Object.assign({}, value);
        var optionsToDiscard = options.slice();
        optionsToDiscard.splice(selectedOption, 1); // Discard any data added using other options

        var _iterator = _createForOfIteratorHelper(optionsToDiscard),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _option = _step.value;

            if (_option.properties) {
              for (var key in _option.properties) {
                if (newFormData.hasOwnProperty(key)) {
                  delete newFormData[key];
                }
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // Call getDefaultFormState to make sure defaults are populated on change.


      onChange((0, _utils.getDefaultFormState)(options[selectedOption], newFormData));
      state.selectedOption = selectedOption;
    };

    var WidgetRef = (0, _vue.computed)(function () {
      var uiSchema = props.uiSchema;
      var _uiSchema$widget = uiSchema.widget,
          widget = _uiSchema$widget === void 0 ? 'select' : _uiSchema$widget;
      return (0, _theme.useWidget)({
        type: 'number'
      }, widget).value;
    });
    (0, _vue.watchEffect)(function () {
      state.selectedOption = getMatchingOptionLocal(props.value, props.options);
    });
    return function () {
      var options = props.options,
          baseType = props.baseType,
          id = props.id,
          schema = props.schema,
          uiSchema = props.uiSchema,
          value = props.value,
          onChange = props.onChange,
          rest = _objectWithoutProperties(props, ["options", "baseType", "id", "schema", "uiSchema", "value", "onChange"]);

      var SchemaItem = formContextRef.value.SchemaItem; // const { widgets } = registry;

      var selectedOption = state.selectedOption; // const { widget = "select", ...uiOptions } = getUiOptions(uiSchema);
      // const Widget = getWidget({ type: "number" }, widget, widgets);

      var Widget = WidgetRef.value;
      var option = options[selectedOption] || null;
      var optionSchema;

      if (option) {
        // If the subschema doesn't declare a type, infer the type from the
        // parent schema
        optionSchema = option.type ? option : Object.assign({}, option, {
          type: baseType
        });
      }

      var enumOptions = options.map(function (option, index) {
        return {
          key: option.title || "Option ".concat(index + 1),
          value: index
        };
      });
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(Widget, _objectSpread(_objectSpread({}, rest), {}, {
        "title": "test",
        "uiSchema": {},
        "id": "".concat(id).concat(schema.oneOf ? '__oneof_select' : '__anyof_select'),
        "schema": {
          type: 'number',
          "default": 0
        },
        "onChange": onOptionChange,
        "value": selectedOption,
        "options": _objectSpread(_objectSpread({}, uiSchema), {}, {
          enumOptions: enumOptions
        })
      }), null), option !== null && (0, _vue.createVNode)(SchemaItem, _objectSpread({
        "id": id,
        "schema": optionSchema,
        "uiSchema": uiSchema,
        "value": value,
        "onChange": onChange
      }, rest), null)]);
    };
  }
});

exports["default"] = _default;