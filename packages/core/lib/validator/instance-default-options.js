"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dateTimeRangeKeyword = require("./date-time-range-keyword");

var COLOR_REG = /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/; // const URL_REG = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ // eslint-disable-line

var defaultOptions = {
  options: {
    allErrors: true,
    jsonPointers: true
  },
  formats: [{
    name: 'color',
    definition: function definition(v) {
      return v === '' || COLOR_REG.test(v);
    }
  }],
  keywords: [{
    name: 'dateRange',
    definition: _dateTimeRangeKeyword.DateRangeKeyword
  }, {
    name: 'dateTimeRange',
    definition: _dateTimeRangeKeyword.DateTimeRangeKeyword
  }, {
    name: 'enumKeyValue',
    definition: {
      type: ['number', 'string'],
      errors: 'full',
      compile: function compile(sch) {
        var values = sch.map(function (s) {
          return s.value;
        }); // const multi = parentSchema.multiple

        return function doValidate(data) {
          var flag = values.indexOf(data) > -1;

          if (!flag) {
            var fun = doValidate;
            var errors = fun.errors || [];
            errors.push({
              keyword: 'enumKeyValue',
              message: '请选择一个正确的选项',
              params: {
                keyword: 'enumKeyValue'
              }
            });
            fun.errors = errors;
          }

          return flag;
        };
      },
      metaSchema: {
        type: 'array',
        items: {
          oneOf: [{
            type: 'object',
            properties: {
              key: {
                type: 'string'
              },
              value: {
                type: 'string'
              }
            }
          }, {
            type: 'object',
            properties: {
              key: {
                type: 'string'
              },
              value: {
                type: 'number'
              }
            }
          }]
        }
      }
    }
  }]
};
var _default = defaultOptions;
exports["default"] = _default;