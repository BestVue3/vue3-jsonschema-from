"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default2;

var _vue = _interopRequireWildcard(require("vue"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _default2() {
  return _vue.createVNode(_Icon["default"], null, {
    "default": function _default() {
      return [_vue.createVNode("path", {
        "d": "M554.656 231.616c0-21.888-17.056-39.616-38.4-39.616-25.6 0-42.656 17.728-42.656 39.616v237.92H230.4c-21.344 0-38.4 17.76-38.4 39.648 0 21.92 17.056 39.68 38.4 39.68h243.2v243.52c0 21.888 17.056 39.616 42.656 39.616 21.344 0 38.4-17.728 38.4-39.616v-243.52h234.688c21.312 0 42.656-17.76 42.656-39.68 0-21.888-21.344-39.648-42.656-39.648h-234.688V231.616z",
        "fill": "#000000",
        "p-id": "1273"
      }, null)];
    }
  });
}