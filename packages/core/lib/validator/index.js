"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createInstance: true,
  validateData: true,
  validateFormData: true,
  toErrorList: true,
  mergeObjects: true
};
exports.createInstance = createInstance;
exports.validateData = validateData;
exports.validateFormData = validateFormData;
exports.toErrorList = toErrorList;
exports.mergeObjects = mergeObjects;

var _ajv = _interopRequireDefault(require("ajv"));

var _ajvErrors = _interopRequireDefault(require("ajv-errors"));

var _lodash = _interopRequireDefault(require("lodash.topath"));

var _instanceDefaultOptions = _interopRequireDefault(require("./instance-default-options"));

var _utils = require("../utils");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var i18n = require('ajv-i18n');

function mergeMaybeArray(a1, a2) {
  var f1 = a1 ? Array.isArray(a1) ? a1 : [a1] : [];
  var f2 = a2 ? Array.isArray(a2) ? a2 : [a2] : [];
  return [].concat(_toConsumableArray(f1), _toConsumableArray(f2));
}

function mergerOptions(op1, op2) {
  var ajvOption = _objectSpread(_objectSpread({}, op1.options), op2.options);

  var formats = mergeMaybeArray(op1.formats, op2.formats); // TODO: 去除 name 相同的？考虑名称相同但是 `number` 和 `string` 不同

  var keywords = mergeMaybeArray(op1.keywords, op2.keywords);
  return {
    // locale: op2.locale || op1.locale || 'zh',
    options: ajvOption,
    formats: formats,
    keywords: keywords
  };
}

function createInstance() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = mergerOptions(_instanceDefaultOptions["default"], opts);
  var instanceOptions = options.options,
      formats = options.formats,
      keywords = options.keywords;
  var ajv = new _ajv["default"](instanceOptions);
  (0, _ajvErrors["default"])(ajv);
  formats.forEach(function (_ref) {
    var name = _ref.name,
        definition = _ref.definition;
    return ajv.addFormat(name, definition);
  });
  keywords.forEach(function (_ref2) {
    var name = _ref2.name,
        definition = _ref2.definition;
    return ajv.addKeyword(name, definition);
  }); // ajv.validate

  return ajv;
}

var defaultInstance = createInstance({});

function validateData(schema, data) {
  var valid = defaultInstance.validate(schema, data);
  return {
    valid: valid,
    errors: defaultInstance.errors
  };
} // interface ErrorSchema {
//   [level: string]: ErrorSchema
//   __errors: string[]
// }


function toErrorSchema(errors) {
  // Transforms a ajv validation errors list:
  // [
  //   {property: ".level1.level2[2].level3", message: "err a"},
  //   {property: ".level1.level2[2].level3", message: "err b"},
  //   {property: ".level1.level2[4].level3", message: "err b"},
  // ]
  // Into an error tree:
  // {
  //   level1: {
  //     level2: {
  //       2: {level3: {errors: ["err a", "err b"]}},
  //       4: {level3: {errors: ["err b"]}},
  //     }
  //   }
  // };
  if (!errors.length) {
    return {};
  }

  return errors.reduce(function (errorSchema, error) {
    var property = error.property,
        message = error.message;
    var path = (0, _lodash["default"])(property);
    var parent = errorSchema; // If the property is at the root (.level1) then toPath creates
    // an empty array element at the first index. Remove it.

    if (path.length > 0 && path[0] === '') {
      path.splice(0, 1);
    }

    var _iterator = _createForOfIteratorHelper(path.slice(0)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var segment = _step.value;

        if (!(segment in parent)) {
          ;
          parent[segment] = {};
        }

        parent = parent[segment];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (Array.isArray(parent.__errors)) {
      // We store the list of errors for this node in a property named __errors
      // to avoid name collision with a possible sub schema field named
      // "errors" (see `validate.createErrorHandler`).
      parent.__errors = parent.__errors.concat(message || '');
    } else {
      if (message) {
        parent.__errors = [message];
      }
    }

    return errorSchema;
  }, {});
}
/**
 * Transforming the error output from ajv to format used by jsonschema.
 * At some point, components should be updated to support ajv.
 */


function transformAjvErrors() {
  var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (errors === null || errors === undefined) {
    return [];
  }

  return errors.map(function (e) {
    var dataPath = e.dataPath,
        keyword = e.keyword,
        message = e.message,
        params = e.params,
        schemaPath = e.schemaPath;
    var property = "".concat(dataPath); // put data in expected format

    return {
      name: keyword,
      property: property,
      message: message,
      params: params,
      stack: "".concat(property, " ").concat(message).trim(),
      schemaPath: schemaPath
    };
  });
}
/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form data and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */


function validateFormData(formData, schema, instance) {
  var locale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'zh';
  var customValidate = arguments.length > 4 ? arguments[4] : undefined;
  var transformErrors = arguments.length > 5 ? arguments[5] : undefined;
  // Include form data with undefined values, which is required for validation.
  var rootSchema = schema; // formData = getDefaultFormState(schema, formData, rootSchema, true);
  // const newMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas);
  // const newFormats = !deepEquals(formerCustomFormats, customFormats);
  // if (newMetaSchemas || newFormats) {
  //   ajv = createAjvInstance();
  // }

  var ajv = instance; // add more schemas to validate against
  // if (
  //   additionalMetaSchemas &&
  //   newMetaSchemas &&
  //   Array.isArray(additionalMetaSchemas)
  // ) {
  //   ajv.addMetaSchema(additionalMetaSchemas);
  //   formerMetaSchema = additionalMetaSchemas;
  // }
  // add more custom formats to validate against
  // if (customFormats && newFormats && isObject(customFormats)) {
  //   Object.keys(customFormats).forEach(formatName => {
  //     ajv.addFormat(formatName, customFormats[formatName]);
  //   });
  //   formerCustomFormats = customFormats;
  // }

  var validationError = null;

  try {
    ajv.validate(schema, formData);
  } catch (err) {
    validationError = err;
  }

  i18n[locale](ajv.errors);
  var errors = transformAjvErrors(ajv.errors); // Clear errors to prevent persistent errors, see #1104

  ajv.errors = null;
  var noProperMetaSchema = validationError && validationError.message && typeof validationError.message === 'string' && validationError.message.includes('no schema with key or ref ');

  if (noProperMetaSchema) {
    errors = [].concat(_toConsumableArray(errors), [{
      stack: validationError.message
    }]);
  }

  if (typeof transformErrors === 'function') {
    errors = transformErrors(errors);
  }

  var errorSchema = toErrorSchema(errors);

  if (noProperMetaSchema) {
    errorSchema = _objectSpread(_objectSpread({}, errorSchema), {
      $schema: {
        __errors: [validationError.message]
      }
    });
  }

  if (typeof customValidate !== 'function') {
    return {
      errors: errors,
      errorSchema: errorSchema
    };
  }

  var customErrorSchemaProxy = createErrorHandlerProxy({});
  customValidate(formData, customErrorSchemaProxy); // const userErrorSchema = unwrapErrorHandler(toRaw(customErrorSchemaProxy))

  var userErrorSchema = toRaw(customErrorSchemaProxy);
  var newErrorSchema = mergeObjects(errorSchema, userErrorSchema, true); // XXX: The errors list produced is not fully compliant with the format
  // exposed by the jsonschema lib, which contains full field paths and other
  // properties.

  var newErrors = toErrorList(newErrorSchema);
  return {
    errors: newErrors,
    errorSchema: newErrorSchema
  };
}

function toErrorList(errorSchema) {
  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'root';
  // XXX: We should transform fieldName as a full field path string.
  var errorList = [];

  if ('__errors' in errorSchema) {
    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
      return {
        stack: "".concat(fieldName, ": ").concat(stack)
      };
    }));
  }

  return Object.keys(errorSchema).reduce(function (acc, key) {
    if (key !== '__errors') {
      acc = acc.concat(toErrorList(errorSchema[key], key));
    }

    return acc;
  }, errorList);
}

function mergeObjects(obj1, obj2) {
  var concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.

  return Object.keys(obj2).reduce(function (acc, key) {
    var left = obj1 ? obj1[key] : {},
        right = obj2[key];

    if (obj1 && obj1.hasOwnProperty(key) && (0, _utils.isObject)(right)) {
      acc[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right);
    } else {
      acc[key] = right;
    }

    return acc;
  }, acc);
} // function unwrapErrorHandler(errorHandler: any) {
//   return Object.keys(errorHandler).reduce((acc, key) => {
//     if (key === "addError") {
//       return acc;
//     } else if (key === "__errors") {
//       return { ...acc, [key]: errorHandler[key] };
//     }
//     return { ...acc, [key]: unwrapErrorHandler(errorHandler[key]) };
//   }, {});
// }
// function isProxy(obj: any) {
//   return obj.__is_proxy__
// }


function toRaw(p) {
  return p.__get_raw__;
}

function createErrorHandlerProxy(raw) {
  return new Proxy(raw, {
    get: function get(target, key, receiver) {
      if (key === 'addError') {
        return function (message) {
          return target.__errors.push(message);
        };
      }

      if (key === '__get_raw__') {
        return raw;
      }
      /**
       * since we only use this method to handle customValidate
       * we know that the `raw` is always `{}`
       */
      // if (key === '__is_proxy__') {
      //   return true
      // }


      var res = Reflect.get(target, key, receiver);

      if (res === undefined) {
        var proxy = createErrorHandlerProxy({});
        target[key] = proxy;
        return proxy;
      }

      return res;
    }
  });
}