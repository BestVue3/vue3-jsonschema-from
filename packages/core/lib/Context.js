"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVJSFContext = useVJSFContext;
exports.VJSFContext = void 0;

var _vue = require("vue");

var VJSFContext = Symbol();
exports.VJSFContext = VJSFContext;

function useVJSFContext() {
  var context = (0, _vue.inject)(VJSFContext);

  if (!context) {
    throw new Error('you should use SchemaForm instead');
  }

  return context;
}