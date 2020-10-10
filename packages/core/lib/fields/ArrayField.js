"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _vueJss = require("vue-jss");

var _theme = require("../theme");

var _types = require("../types");

var _common = require("./common");

var _Context = require("../Context");

var _utils = require("../utils");

var _add = _interopRequireDefault(require("./icons/add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useStyles = (0, _vueJss.createUseStyles)({
  addBtn: {
    border: '1px solid #aaa',
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    background: '#fefefe',
    cursor: 'pointer',
    marginBottom: 20
  }
});
var ArrayItemAction;

(function (ArrayItemAction) {
  ArrayItemAction["ADD"] = "add";
  ArrayItemAction["DELETE"] = "delete";
  ArrayItemAction["DOWN"] = "down";
  ArrayItemAction["UP"] = "up";
})(ArrayItemAction || (ArrayItemAction = {}));

var Comp = (0, _vue.defineComponent)({
  name: 'ArrayField',
  props: _types.CommonFieldPropsDefine,
  setup: function setup(props) {
    var themeContext = (0, _theme.useThemeContext)();

    var _useCommonField = (0, _common.useCommonField)(props, _types.SchemaTypes.ARRAY),
        componentRef = _useCommonField.componentRef,
        rendererPropsRef = _useCommonField.rendererPropsRef,
        schemaTitleRef = _useCommonField.schemaTitleRef;

    var SingleTypeArrayWrapperRef = (0, _theme.useComponent)(_theme.ThemeLayoutsNames.SingleTypeArrayWrapper);
    var HeaderRef = (0, _theme.useComponent)(_theme.ThemeLayoutsNames.Header);
    var formContextRef = (0, _Context.useVJSFContext)();
    var handleChangeRef = (0, _vue.computed)(function () {
      var onChange = props.onChange;
      return function (v) {
        // TODO: 处理空值
        onChange(v);
      };
    });
    var isSingleTypeRef = (0, _vue.computed)(function () {
      return _typeof(props.schema.items) === 'object' && !Array.isArray(props.schema.items);
    });
    var value = props.value,
        schema = props.schema;

    if (value === undefined || !Array.isArray(value)) {
      if (Array.isArray(schema["default"])) {
        handleChangeRef.value(schema["default"]);
      }
    }

    var handleValueChange = function handleValueChange(index, v) {
      console.log('------------------>', props.value);
      var value = props.value || []; // ;(props.value as any)[index] = v

      value[index] = v;
      props.onChange(value);
    };

    var arrayItemAction = function arrayItemAction(action, index) {
      var schema = props.schema;
      var value = props.value || [];
      var len = value.length;

      switch (action) {
        case ArrayItemAction.DOWN:
          {
            if (index < len - 1) {
              var item = value.splice(index, 1);
              value.splice(index + 1, 0, item);
            }

            break;
          }

        case ArrayItemAction.UP:
          {
            if (index > 0) {
              var _item = value.splice(index, 1);

              value.splice(index - 1, 0, _item);
            }

            break;
          }

        case ArrayItemAction.ADD:
          {
            // TODO: should use default value of type
            value.splice(index + 1, 0, schema["default"] || undefined);
            break;
          }

        case ArrayItemAction.DELETE:
          {
            value.splice(index, 1);
            break;
          }

        default:
          {
            console.warn("array action of ".concat(action, " is not supported"));
          }
      }

      props.onChange(value);
    };

    var itemsSchemaRef = (0, _vue.computed)(function () {
      // TODO: retrieve items schema should use another data?
      return (0, _utils.retrieveSchema)(props.schema.items, props.rootSchema, props.value);
    });
    var isMultiSelectionRef = (0, _vue.computed)(function () {
      var schema = props.schema,
          rootSchema = props.rootSchema; // const items = itemsSchemaRef.value

      return (0, _utils.isMultiSelect)(schema, rootSchema); // return (
      //   uiSchema?.widget ||
      //   (items &&
      //     isObject(items) &&
      //     ((items as Schema).enum || (items as Schema).enumKeyValue))
      // )
    });
    var classesRef = useStyles();
    return function () {
      var ArrayRenderer = componentRef.value;
      var Header = HeaderRef.value;
      var SchemaItem = formContextRef.value.SchemaItem;
      var value = props.value,
          schema = props.schema,
          path = props.path,
          rootSchema = props.rootSchema,
          uiSchema = props.uiSchema,
          errorSchema = props.errorSchema;
      var isSingleType = isSingleTypeRef.value;
      var isMultiType = Array.isArray(schema.items);
      var arr = value || [];
      var isMultiSelection = isMultiSelectionRef.value;
      var commonProps = {
        isDependenciesKey: false,
        required: false,
        requiredError: false,
        rootSchema: rootSchema
      };
      var classes = classesRef.value;
      var content;

      if (schema.additionalItems) {
        console.warn('additionalItems not supported yet');
      }

      if (isMultiSelection) {
        var _uiSchema$widget = uiSchema.widget,
            widget = _uiSchema$widget === void 0 ? 'select' : _uiSchema$widget,
            options = _objectWithoutProperties(uiSchema, ["widget"]);

        var Widget = (0, _theme.getWidget)(schema, widget, themeContext.value.widgets);
        var enumOptions = (0, _utils.optionsList)(itemsSchemaRef.value);
        content = (0, _vue.createVNode)(Widget, _objectSpread(_objectSpread({}, rendererPropsRef.value), {}, {
          "errorSchema": errorSchema,
          "onChange": handleChangeRef.value,
          "options": _objectSpread(_objectSpread({}, options), {}, {
            enumOptions: enumOptions,
            multiple: true
          })
        }), null);
      } else if (isSingleType) {
        var SingleTypeArrayWrapper = SingleTypeArrayWrapperRef.value;
        content = arr.length > 0 ? arr.map(function (item, index) {
          return (0, _vue.createVNode)(SingleTypeArrayWrapper, {
            "onDown": function onDown() {
              return arrayItemAction(ArrayItemAction.DOWN, index);
            },
            "onUp": function onUp() {
              return arrayItemAction(ArrayItemAction.UP, index);
            },
            "onDelete": function onDelete() {
              return arrayItemAction(ArrayItemAction.DELETE, index);
            },
            "onAdd": function onAdd() {
              return arrayItemAction(ArrayItemAction.ADD, index);
            },
            "length": arr.length,
            "index": index,
            "title": rendererPropsRef.value.title
          }, {
            "default": function _default() {
              return [(0, _vue.createVNode)(SchemaItem, _objectSpread(_objectSpread({}, commonProps), {}, {
                "id": "".concat(props.id, "_").concat(index),
                "path": "".concat(path, "/").concat(index),
                "key": index,
                "value": arr[index],
                "onChange": function onChange(v) {
                  return handleValueChange(index, v);
                },
                "schema": schema.items,
                "errorSchema": errorSchema[index],
                "uiSchema": (uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema.items) || {}
              }), null)];
            }
          });
        }) : (0, _vue.createVNode)("a", {
          "onClick": function onClick() {
            return arrayItemAction(ArrayItemAction.ADD, 0);
          },
          "class": classes.addBtn
        }, [(0, _vue.createVNode)(_add["default"], null, null), (0, _vue.createTextVNode)(" "), schemaTitleRef.value || props.path]);
      } else if (isMultiType) {
        var itemTypes = schema.items;
        content = itemTypes.map(function (item, index) {
          return (0, _vue.createVNode)(SchemaItem, _objectSpread(_objectSpread({}, commonProps), {}, {
            "id": "".concat(props.id, "_").concat(index),
            "schema": item,
            "key": index,
            "path": "".concat(path, "/").concat(index),
            "value": value[index],
            "onChange": function onChange(v) {
              return handleValueChange(index, v);
            },
            "errorSchema": errorSchema[index],
            "uiSchema": (uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema.items) && uiSchema.items[index] || {} || {}
          }), null);
        });
      } else {
        content = (0, _vue.createVNode)(ArrayRenderer, _objectSpread(_objectSpread({}, rendererPropsRef.value), {}, {
          "errorSchema": errorSchema,
          "onChange": handleChangeRef.value
        }), null);
      }

      return [schemaTitleRef.value ? (0, _vue.createVNode)(Header, {
        "title": schemaTitleRef.value,
        "type": "array"
      }, null) : null, content]; // return (
      //   <ArrayRenderer
      //     {...rendererPropsRef.value}
      //     onChange={handleChangeRef.value}
      //   />
      // )
    };
  }
});
var _default2 = Comp;
exports["default"] = _default2;