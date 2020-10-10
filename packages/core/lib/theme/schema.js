"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveSchema = resolveSchema;
exports.retrieveSchema = retrieveSchema;
exports.findSchemaDefinition = findSchemaDefinition;
exports.mergeSchemas = mergeSchemas;
exports.getVJSFConfig = getVJSFConfig;

var _jsonpointer = _interopRequireDefault(require("jsonpointer"));

var _lodash = _interopRequireDefault(require("lodash.union"));

var _utils = require("./utils");

var _validator = require("./validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// function resolveSchema(schema: any, data: any = {}) {}
function resolveSchema(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.hasOwnProperty)(schema, '$ref')) {
    return resolveReference(schema, rootSchema, formData);
  } else if ((0, _utils.hasOwnProperty)(schema, 'dependencies')) {
    var resolvedSchema = resolveDependencies(schema, rootSchema, formData);
    return retrieveSchema(resolvedSchema, rootSchema, formData);
  } // else if (hasOwnProperty(schema, "allOf")) {
  //   return {
  //     ...schema,
  //     allOf: schema.allOf.map((allOfSubschema: any) =>
  //       retrieveSchema(allOfSubschema, rootSchema, formData)
  //     ),
  //   };
  // }
  else {
      // No $ref or dependencies attribute found, returning the original schema.
      return schema;
    }
}

function retrieveSchema(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!(0, _utils.isObject)(schema)) {
    return {};
  }

  var resolvedSchema = resolveSchema(schema, rootSchema, formData); // TODO: allOf and additionalProperties not implemented
  // if ("allOf" in schema) {
  //   try {
  //     resolvedSchema = mergeAllOf({
  //       ...resolvedSchema,
  //       allOf: resolvedSchema.allOf,
  //     });
  //   } catch (e) {
  //     console.warn("could not merge subschemas in allOf:\n" + e);
  //     const { allOf, ...resolvedSchemaWithoutAllOf } = resolvedSchema;
  //     return resolvedSchemaWithoutAllOf;
  //   }
  // }
  // const hasAdditionalProperties =
  //   resolvedSchema.hasOwnProperty("additionalProperties") &&
  //   resolvedSchema.additionalProperties !== false;
  // if (hasAdditionalProperties) {
  //   return stubExistingAdditionalProperties(
  //     resolvedSchema,
  //     rootSchema,
  //     formData
  //   );
  // }

  return resolvedSchema;
} // export function processSchema(
//   schema: any,
//   rootSchema: any = {},
//   data: any = {}
// ): Schema {
//   if (hasOwnProperty(schema, '$ref')) {
//     return resolveReference(schema, rootSchema, data)
//   }
//   if (hasOwnProperty(schema, 'dependencies')) {
//     const resolvedSchema = resolveSchema(schema)
//   }
// }


function resolveReference(schema, rootSchema, formData) {
  // Retrieve the referenced schema definition.
  var $refSchema = findSchemaDefinition(schema.$ref, rootSchema); // Drop the $ref property of the source schema.

  var $ref = schema.$ref,
      localSchema = _objectWithoutProperties(schema, ["$ref"]); // Update referenced schema definition with local schema properties.


  return retrieveSchema(_objectSpread(_objectSpread({}, $refSchema), localSchema), rootSchema, formData);
}

function findSchemaDefinition($ref) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var origRef = $ref;

  if ($ref.startsWith('#')) {
    // Decode URI fragment representation.
    $ref = decodeURIComponent($ref.substring(1));
  } else {
    throw new Error("Could not find a definition for ".concat(origRef, "."));
  }

  var current = _jsonpointer["default"].get(rootSchema, $ref);

  if (current === undefined) {
    throw new Error("Could not find a definition for ".concat(origRef, "."));
  }

  if ((0, _utils.hasOwnProperty)(current, '$ref')) {
    // return { ...current, findSchemaDefinition(current.$ref, rootSchema) }  ?
    return findSchemaDefinition(current.$ref, rootSchema);
  }

  return current;
}

function resolveDependencies(schema, rootSchema, formData) {
  // Drop the dependencies from the source schema.
  var _schema$dependencies = schema.dependencies,
      dependencies = _schema$dependencies === void 0 ? {} : _schema$dependencies,
      resolvedSchema = _objectWithoutProperties(schema, ["dependencies"]); // if ("oneOf" in resolvedSchema) {
  //   resolvedSchema =
  //     resolvedSchema.oneOf[
  //       getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)
  //     ];
  // } else if ("anyOf" in resolvedSchema) {
  //   resolvedSchema =
  //     resolvedSchema.anyOf[
  //       getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)
  //     ];
  // }


  return processDependencies(dependencies, resolvedSchema, rootSchema, formData);
}

function processDependencies(dependencies, resolvedSchema, rootSchema, formData) {
  // Process dependencies updating the local schema properties as appropriate.
  for (var dependencyKey in dependencies) {
    // Skip this dependency if its trigger property is not present.
    if (formData[dependencyKey] === undefined) {
      continue;
    } // Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)


    if (resolvedSchema.properties && !(dependencyKey in resolvedSchema.properties)) {
      continue;
    }

    var dependencyValue = dependencies[dependencyKey],
        remainingDependencies = _objectWithoutProperties(dependencies, [dependencyKey].map(_toPropertyKey));

    if (Array.isArray(dependencyValue)) {
      resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
    } else if ((0, _utils.isObject)(dependencyValue)) {
      resolvedSchema = withDependentSchema(resolvedSchema, rootSchema, formData, dependencyKey, dependencyValue);
    }

    return processDependencies(remainingDependencies, resolvedSchema, rootSchema, formData);
  }

  return resolvedSchema;
}

function withDependentProperties(schema, additionallyRequired) {
  if (!additionallyRequired) {
    return schema;
  }

  var required = Array.isArray(schema.required) ? Array.from(new Set([].concat(_toConsumableArray(schema.required), _toConsumableArray(additionallyRequired)))) : additionallyRequired;
  return _objectSpread(_objectSpread({}, schema), {}, {
    required: required
  });
}

function withDependentSchema(schema, rootSchema, formData, dependencyKey, dependencyValue) {
  // retrieveSchema
  var _retrieveSchema = retrieveSchema(dependencyValue, rootSchema, formData),
      oneOf = _retrieveSchema.oneOf,
      dependentSchema = _objectWithoutProperties(_retrieveSchema, ["oneOf"]);

  schema = mergeSchemas(schema, dependentSchema); // Since it does not contain oneOf, we return the original schema.

  if (oneOf === undefined) {
    return schema;
  } else if (!Array.isArray(oneOf)) {
    throw new Error("invalid: it is some ".concat(_typeof(oneOf), " instead of an array"));
  } // Resolve $refs inside oneOf.


  var resolvedOneOf = oneOf.map(function (subschema) {
    return (0, _utils.hasOwnProperty)(subschema, '$ref') ? resolveReference(subschema, rootSchema, formData) : subschema;
  });
  return withExactlyOneSubschema(schema, rootSchema, formData, dependencyKey, resolvedOneOf);
}

function withExactlyOneSubschema(schema, rootSchema, formData, dependencyKey, oneOf) {
  var validSubschemas = oneOf.filter(function (subschema) {
    if (!subschema.properties) {
      return false;
    }

    var conditionPropertySchema = subschema.properties[dependencyKey];

    if (conditionPropertySchema) {
      var conditionSchema = {
        type: 'object',
        properties: _defineProperty({}, dependencyKey, conditionPropertySchema)
      }; // TODO: validate formdata

      var _validateData = (0, _validator.validateData)(conditionSchema, formData),
          errors = _validateData.errors;

      return !errors || errors.length === 0;
    }
  });

  if (validSubschemas.length !== 1) {
    console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid");
    return schema;
  } // debugger


  var subschema = validSubschemas[0];

  var _subschema$properties = subschema.properties,
      conditionPropertySchema = _subschema$properties[dependencyKey],
      dependentSubschema = _objectWithoutProperties(_subschema$properties, [dependencyKey].map(_toPropertyKey));

  var dependentSchema = _objectSpread(_objectSpread({}, subschema), {}, {
    properties: dependentSubschema
  });

  return mergeSchemas(schema, // retrieveSchema
  retrieveSchema(dependentSchema, rootSchema, formData));
} // Recursively merge deeply nested schemas.
// The difference between mergeSchemas and mergeObjects
// is that mergeSchemas only concats arrays for
// values under the "required" keyword, and when it does,
// it doesn't include duplicate values.


function mergeSchemas(obj1, obj2) {
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.

  return Object.keys(obj2).reduce(function (acc, key) {
    var left = obj1 ? obj1[key] : {},
        right = obj2[key];

    if (obj1 && (0, _utils.hasOwnProperty)(obj1, key) && (0, _utils.isObject)(right)) {
      acc[key] = mergeSchemas(left, right);
    } else if (obj1 && obj2 && ((0, _utils.getSchemaType)(obj1) === 'object' || (0, _utils.getSchemaType)(obj2) === 'object') && key === 'required' && Array.isArray(left) && Array.isArray(right)) {
      // Don't include duplicate values when merging
      // "required" fields.
      acc[key] = (0, _lodash["default"])(left, right);
    } else {
      acc[key] = right;
    }

    return acc;
  }, acc);
}

function getVJSFConfig(schema, uiSchema) {
  if (uiSchema) return uiSchema;
  return schema.vjsf || {};
}