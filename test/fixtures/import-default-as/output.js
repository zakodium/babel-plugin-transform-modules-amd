"use strict";

define(["foo"], function (_fooModule) {
  let _foo = _interopRequireDefault(_fooModule);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  console.log(_foo.default);
});