"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsList = optionsList;
exports.resolveSchema = resolveSchema;
exports.retrieveSchema = retrieveSchema;
exports.stubExistingAdditionalProperties = stubExistingAdditionalProperties;
exports.findSchemaDefinition = findSchemaDefinition;
exports.mergeSchemas = mergeSchemas;
exports.getVJSFConfig = getVJSFConfig;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.hasOwnProperty = hasOwnProperty;
exports.getSchemaType = getSchemaType;
exports.isConstant = isConstant;
exports.isSelect = isSelect;
exports.isMultiSelect = isMultiSelect;
exports.getMatchingOption = getMatchingOption;
exports.mergeDefaultsWithFormData = mergeDefaultsWithFormData;
exports.getDefaultFormState = getDefaultFormState;
exports.guessType = exports.ADDITIONAL_PROPERTY_FLAG = void 0;

var _jsonpointer = _interopRequireDefault(require("jsonpointer"));

var _lodash = _interopRequireDefault(require("lodash.union"));

var _jsonSchemaMergeAllof = _interopRequireDefault(require("json-schema-merge-allof"));

var _validator = require("./validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function resolveSchema(schema: any, data: any = {}) {}
function optionsList(schema) {
  if (schema["enum"]) {
    return schema["enum"].map(function (value, i) {
      var key = schema.enumNames && schema.enumNames[i] || String(value);
      return {
        key: key,
        value: value
      };
    });
  }

  return []; // TODO: consider oneOf and anyOf
  // } else {
  //   const altSchemas = schema.oneOf || schema.anyOf;
  //   return altSchemas.map((schema, i) => {
  //     const value = toConstant(schema);
  //     const label = schema.title || String(value);
  //     return { label, value };
  //   });
  // }
}

function resolveSchema(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (hasOwnProperty(schema, '$ref')) {
    return resolveReference(schema, rootSchema, formData);
  } else if (hasOwnProperty(schema, 'dependencies')) {
    var resolvedSchema = resolveDependencies(schema, rootSchema, formData);
    return retrieveSchema(resolvedSchema, rootSchema, formData);
  } else if (hasOwnProperty(schema, 'allOf') && Array.isArray(schema.allOf)) {
    return _objectSpread(_objectSpread({}, schema), {}, {
      allOf: schema.allOf.map(function (allOfSubschema) {
        return retrieveSchema(allOfSubschema, rootSchema, formData);
      })
    });
  } else {
    // No $ref or dependencies attribute found, returning the original schema.
    return schema;
  }
}

function retrieveSchema(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isObject(schema)) {
    return {};
  }

  var resolvedSchema = resolveSchema(schema, rootSchema, formData); // TODO: allOf and additionalProperties not implemented

  if ('allOf' in schema) {
    try {
      resolvedSchema = (0, _jsonSchemaMergeAllof["default"])(_objectSpread(_objectSpread({}, resolvedSchema), {}, {
        allOf: resolvedSchema.allOf
      }));
    } catch (e) {
      console.warn('could not merge subschemas in allOf:\n' + e);

      var _resolvedSchema = resolvedSchema,
          allOf = _resolvedSchema.allOf,
          resolvedSchemaWithoutAllOf = _objectWithoutProperties(_resolvedSchema, ["allOf"]);

      return resolvedSchemaWithoutAllOf;
    }
  }

  var hasAdditionalProperties = resolvedSchema.hasOwnProperty('additionalProperties') && resolvedSchema.additionalProperties !== false;

  if (hasAdditionalProperties) {
    // put formData existing additional properties into schema
    return stubExistingAdditionalProperties(resolvedSchema, rootSchema, formData);
  }

  return resolvedSchema;
}

var ADDITIONAL_PROPERTY_FLAG = '__additional_property'; // This function will create new "properties" items for each key in our formData

exports.ADDITIONAL_PROPERTY_FLAG = ADDITIONAL_PROPERTY_FLAG;

function stubExistingAdditionalProperties(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Clone the schema so we don't ruin the consumer's original
  schema = _objectSpread(_objectSpread({}, schema), {}, {
    properties: _objectSpread({}, schema.properties)
  });
  Object.keys(formData).forEach(function (key) {
    if (schema.properties.hasOwnProperty(key)) {
      // No need to stub, our schema already has the property
      return;
    }

    var additionalProperties;

    if (schema.additionalProperties.hasOwnProperty('$ref')) {
      additionalProperties = retrieveSchema({
        $ref: schema.additionalProperties['$ref']
      }, rootSchema, formData);
    } else if (schema.additionalProperties.hasOwnProperty('type')) {
      additionalProperties = _objectSpread({}, schema.additionalProperties);
    } else {
      additionalProperties = {
        type: guessType(formData[key])
      };
    } // The type of our new key should match the additionalProperties value;


    ;
    schema.properties[key] = additionalProperties;
    schema.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
  });
  return schema;
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

  if (hasOwnProperty(current, '$ref')) {
    // return { ...current, findSchemaDefinition(current.$ref, rootSchema) }  ?
    return findSchemaDefinition(current.$ref, rootSchema);
  }

  return current;
}

function resolveDependencies(schema, rootSchema, formData) {
  // Drop the dependencies from the source schema.
  var _schema$dependencies = schema.dependencies,
      dependencies = _schema$dependencies === void 0 ? {} : _schema$dependencies,
      resolvedSchema = _objectWithoutProperties(schema, ["dependencies"]);

  if ('oneOf' in resolvedSchema) {
    resolvedSchema = resolvedSchema.oneOf[getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)];
  } else if ('anyOf' in resolvedSchema) {
    resolvedSchema = resolvedSchema.anyOf[getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)];
  }

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
    } else if (isObject(dependencyValue)) {
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
    return hasOwnProperty(subschema, '$ref') ? resolveReference(subschema, rootSchema, formData) : subschema;
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

    if (obj1 && hasOwnProperty(obj1, key) && isObject(right)) {
      acc[key] = mergeSchemas(left, right);
    } else if (obj1 && obj2 && (getSchemaType(obj1) === 'object' || getSchemaType(obj2) === 'object') && key === 'required' && Array.isArray(left) && Array.isArray(right)) {
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

function isObject(thing) {
  return _typeof(thing) === 'object' && thing !== null && !Array.isArray(thing);
}

function isEmptyObject(thing) {
  return isObject(thing) && Object.keys(thing).length === 0;
}

function hasOwnProperty(obj, key) {
  /**
   * 直接调用`obj.hasOwnProperty`有可能会因为
   * obj 覆盖了 prototype 上的 hasOwnProperty 而产生错误
   */
  return Object.prototype.hasOwnProperty.call(obj, key);
}
/* Gets the type of a given schema. */


function getSchemaType(schema) {
  var type = schema.type;

  if (!type && schema["const"]) {
    return guessType(schema["const"]);
  }

  if (!type && schema["enum"]) {
    return 'string';
  }

  if (!type && (schema.properties || schema.additionalProperties)) {
    return 'object';
  }

  var t = type;

  if (t instanceof Array && t.length === 2 && t.includes('null')) {
    return t.find(function (type) {
      return type !== 'null';
    });
  }

  return type; // let { type } = schema
  // if (type) return type
  // if (!type && schema.const) {
  //   return guessType(schema.const)
  // }
  // if (!type && schema.enum) {
  //   // return 'string'
  //   return guessType(schema.enum[0])
  // }
  // if (!type && (schema.properties || schema.additionalProperties)) {
  //   return 'object'
  // }
  // console.warn('can not guess schema type, just use object', schema)
  // return 'object'
  // if (type instanceof Array && type.length === 2 && type.includes('null')) {
  //   return type.find((type) => type !== 'null')
  // }
} // In the case where we have to implicitly create a schema, it is useful to know what type to use
//  based on the data we are defining


var guessType = function guessType(value) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (value == null) {
    return 'null';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (!isNaN(value)) {
    return 'number';
  } else if (_typeof(value) === 'object') {
    return 'object';
  } // Default to string if we can't figure it out


  return 'string';
};

exports.guessType = guessType;

function isConstant(schema) {
  return Array.isArray(schema["enum"]) && schema["enum"].length === 1 || schema.hasOwnProperty('const');
}

function isSelect(_schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var schema = retrieveSchema(_schema, rootSchema);
  var altSchemas = schema.oneOf || schema.anyOf;

  if (Array.isArray(schema["enum"])) {
    return true;
  } else if (Array.isArray(altSchemas)) {
    return altSchemas.every(function (altSchemas) {
      return isConstant(altSchemas);
    });
  }

  return false;
}

function isMultiSelect(schema) {
  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!schema.uniqueItems || !schema.items) {
    return false;
  }

  return isSelect(schema.items, rootSchema);
} // TODO: change oneOf selected based on data


function getMatchingOption(formData, options, isValid) {
  for (var i = 0; i < options.length; i++) {
    var option = options[i]; // If the schema describes an object then we need to add slightly more
    // strict matching to the schema, because unless the schema uses the
    // "requires" keyword, an object will match the schema as long as it
    // doesn't have matching keys with a conflicting type. To do this we use an
    // "anyOf" with an array of requires. This augmentation expresses that the
    // schema should match if any of the keys in the schema are present on the
    // object and pass validation.

    if (option.properties) {
      // Create an "anyOf" schema that requires at least one of the keys in the
      // "properties" object
      var requiresAnyOf = {
        anyOf: Object.keys(option.properties).map(function (key) {
          return {
            required: [key]
          };
        })
      };
      var augmentedSchema = void 0; // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"

      if (option.anyOf) {
        // Create a shallow clone of the option
        var shallowClone = _extends({}, option);

        if (!shallowClone.allOf) {
          shallowClone.allOf = [];
        } else {
          // If "allOf" already exists, shallow clone the array
          shallowClone.allOf = shallowClone.allOf.slice();
        }

        shallowClone.allOf.push(requiresAnyOf);
        augmentedSchema = shallowClone;
      } else {
        augmentedSchema = Object.assign({}, option, requiresAnyOf);
      } // Remove the "required" field as it's likely that not all fields have
      // been filled in yet, which will mean that the schema is not valid


      delete augmentedSchema.required;

      if (isValid(augmentedSchema, formData)) {
        return i;
      }
    } else if (isValid(options[i], formData)) {
      return i;
    }
  }

  return 0;
}

function mergeDefaultsWithFormData(defaults, formData) {
  if (Array.isArray(formData)) {
    if (!Array.isArray(defaults)) {
      defaults = [];
    }

    return formData.map(function (value, idx) {
      if (defaults[idx]) {
        return mergeDefaultsWithFormData(defaults[idx], value);
      }

      return value;
    });
  } else if (isObject(formData)) {
    var acc = Object.assign({}, defaults); // Prevent mutation of source object.

    return Object.keys(formData).reduce(function (acc, key) {
      acc[key] = mergeDefaultsWithFormData(defaults ? defaults[key] : {}, formData[key]);
      return acc;
    }, acc);
  } else {
    return formData;
  }
}

function getDefaultFormState(_schema, formData) {
  if (!isObject(_schema)) {
    throw new Error('Invalid schema: ' + _schema);
  } // const schema = retrieveSchema(_schema, rootSchema, formData)


  var defaults = _schema["default"]; // TODO: I guess we don't need to get default from children schema
  // const defaults = computeDefaults(
  //   schema,
  //   _schema.default,
  //   rootSchema,
  //   formData,
  //   includeUndefinedValues
  // );

  if (typeof formData === 'undefined') {
    // No form data? Use schema defaults.
    return defaults;
  }

  if (isObject(formData) || Array.isArray(formData)) {
    return mergeDefaultsWithFormData(defaults, formData);
  }

  if (formData === 0 || formData === false || formData === '') {
    return formData;
  }

  return formData || defaults;
}