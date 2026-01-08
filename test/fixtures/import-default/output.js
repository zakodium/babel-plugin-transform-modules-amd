"use strict";

define(["foo", "bar", "./directory/foo-bar"], function (
  _fooModule,
  _barModule,
  _fooBarModule,
) {
  let _foo = _interopRequireDefault(_fooModule);
  let _bar = _interopRequireDefault(_barModule);
  let _fooBar = _interopRequireDefault(_fooBarModule);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  console.log(_foo.default, _bar.default, _fooBar.default);
});