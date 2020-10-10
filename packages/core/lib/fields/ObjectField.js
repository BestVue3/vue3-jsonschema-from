"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("../types");

var _utils = require("../utils");

var _Context = require("../Context");

var _theme = require("../theme");

var _common = require("./common");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = (0, _vue.defineComponent)({
  name: 'ObjectField',
  props: _types.CommonFieldPropsDefine,
  setup: function setup(props) {
    var valueRef = (0, _vue.ref)({});
    var formContextRef = (0, _Context.useVJSFContext)();
    var schema = props.schema;

    if (!props.value || !(0, _utils.isObject)(props.value)) {
      if (schema["default"] && (0, _utils.isObject)(schema["default"])) {
        props.onChange(schema["default"]);
      } else if (!(0, _utils.isObject)(props.value)) {
        props.onChange(undefined);
      }
    } // const retrievedSchemaRef = computed(() => {
    //   const { schema, rootSchema, value } = props
    //   return retrieveSchema(schema, rootSchema, value)
    // })


    var HeaderRef = (0, _theme.useComponent)(_theme.ThemeLayoutsNames.Header); // const propertiesUiSchemaRef = computed(() => {
    //   const uiSchema = props.uiSchema || {}
    //   return uiSchema.properties || {}
    // })
    // const propertiesRef = computed(() => {
    //   if (retrievedSchemaRef.value.properties) {
    //     console.warn(
    //       'schema of type object contain no properties',
    //       props.schema,
    //     )
    //   }
    //   return retrievedSchemaRef.value.properties
    // })

    var handlePropertyChange = function handlePropertyChange(k, v) {
      // props.value[key]
      var value = props.value || {};

      if (v === undefined) {
        delete value[k];
      } else {
        /**
         * since our value is always object and will be nested very deep
         * we decide to mutate object prop field directly
         * but we still will trigger `onChange` to notify parent
         * in case parent have some action to do
         * it is not recommend to do it this way
         * but if we force update object filed at top level
         * it may cause performance issue and also
         * it will be too complex to manager
         * we stil not found any problem when we doing so
         * so we will keep doing it this way
         */
        value[k] = v;
      }

      props.onChange(value);
    }; // TODO: how to know whether if some field is required but got no value
    // const objectErrorsRef = computed(() => {
    //   const errors = formContextRef.value.errors
    //   const objErrors = errors.filter((e: any) => e.dataPath === props.path)
    //   return objErrors
    // })
    // const requiredErrorKeysRef = computed(() => {
    //   const set = new Set()
    //   objectErrorsRef.value
    //     .filter((e: any) => e.keyword === 'required')
    //     .forEach((e: any) => {
    //       set.add(e.params.missingProperty)
    //     })
    //   return Array.from(set)
    // })


    var uiSchemaRef = (0, _common.getUiSchema)(props);
    var titleRef = (0, _vue.computed)(function () {
      var vjsf = uiSchemaRef.value;
      return props.schema.title || (vjsf ? vjsf.title : '');
    });
    var propertiesRef = (0, _vue.computed)(function () {
      var uiSchema = props.uiSchema,
          schema = props.schema; // const schema = retrievedSchemaRef.value

      var properties = schema.properties || {};
      var propertiesOrder = uiSchema && uiSchema.propertiesOrder;
      if (!propertiesOrder) return Object.keys(properties);else {
        var before = [];
        var after = [];
        var keys = new Set(Object.keys(properties));
        var isBefore = true;
        var alreadyHandleLeft = false;
        propertiesOrder.forEach(function (k) {
          var arr = isBefore ? before : after;

          if (keys.has(k) && k !== '*') {
            arr.push(k);
            keys["delete"](k);
          } else if (k === '*') {
            isBefore = false;
            alreadyHandleLeft = true;
          }
        });
        return [].concat(before, _toConsumableArray(keys), after);
      }
    });
    return function () {
      // console.log('............', retrievedSchemaRef.value)
      var path = props.path,
          value = props.value,
          schema = props.schema,
          rootSchema = props.rootSchema,
          uiSchema = props.uiSchema,
          errorSchema = props.errorSchema; // const requiredErrorKeys = requiredErrorKeysRef.value
      // const schema = retrievedSchemaRef.value

      var SchemaItem = formContextRef.value.SchemaItem;
      var Header = HeaderRef.value;
      var requires = schema.required || [];

      if (!schema.properties) {
        console.warn('schema of type object contain no properties', props.schema);
      }

      var properties = schema.properties || {}; // const dependencies = originalSchema.dependencies || {}

      var title = titleRef.value;
      return [title ? (0, _vue.createVNode)(Header, {
        "title": title,
        "type": "object"
      }, null) : null, propertiesRef.value.map(function (k) {
        var fieldUiSchema = uiSchema && uiSchema.properties ? uiSchema.properties[k] || {} : {};
        return (0, _vue.createVNode)(SchemaItem, {
          "id": "".concat(props.id, "_").concat(k),
          "path": "".concat(path, "/").concat(k),
          "key": k,
          "value": value && value[k],
          "errorSchema": errorSchema[k],
          "onChange": function onChange(v) {
            return handlePropertyChange(k, v);
          },
          "isDependenciesKey": false,
          "required": requires.indexOf(k) > -1,
          "schema": properties[k],
          "rootSchema": rootSchema,
          "uiSchema": fieldUiSchema
        }, null);
      })];
    };
  }
});

exports["default"] = _default;