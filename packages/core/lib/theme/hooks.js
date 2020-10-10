"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThemeContext = useThemeContext;
exports.useComponent = useComponent;
exports.useWidget = useWidget;

var _vue = require("vue");

var _Context = require("./Context");

var _utils = require("./utils");

function useThemeContext() {
  var context = (0, _vue.inject)(_Context.ComponentsContext);

  if (!context || !context.value) {
    throw new Error('Theme needed');
  }

  return context;
}
/**
 * override function can not fix problem
 * we may pass `name` in condition type
 * override will emit error when we doing that
 */
// export function useComponent(
//   name: ThemeRendererComponentNames,
// ): Ref<RendererComponentDefine>
// export function useComponent(
//   name: ThemeLayoutsNames,
// ): {
//   header: Ref<FormDefine>
//   form: Ref<FormDefine>
//   array: Ref<FormDefine>
// }[typeof name extends ThemeLayoutsNames.Header
//   ? 'header'
//   : typeof name extends ThemeLayoutsNames.Form
//   ? 'form'
//   : 'array']
// export function useComponent(
//   name: ThemeLayoutsNames.Header,
// ): Ref<HeaderDefine>
// export function useComponent(
//   name: ThemeLayoutsNames.SingleTypeArrayWrapper,
// ): Ref<SingleTypeArrayDefine>


function useComponent(name) {
  var context = useThemeContext();
  var Component = (0, _vue.computed)(function () {
    return context.value.layouts[name];
  });
  return Component;
}

function useWidget(schema, widget) {
  var context = useThemeContext();
  var Component = (0, _vue.computed)(function () {
    var Widget = (0, _utils.getWidget)(schema, widget, context.value.widgets);
    return Widget;
  });
  return Component;
}