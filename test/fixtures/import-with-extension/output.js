"use strict";

define(["foo", "./bar"], function (_fooModule, _barModule) {
  let _foo = _interopRequireDefault(_fooModule);
  let _bar = _interopRequireDefault(_barModule);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  console.log(_foo.default, _bar.default);
});
