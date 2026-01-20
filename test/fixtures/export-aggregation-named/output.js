"use strict";

define(["exports", "module"], function (exports, _module) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  Object.defineProperty(exports, "bar", {
    enumerable: true,
    get: function () {
      return _module.bar;
    },
  });
  Object.defineProperty(exports, "foo", {
    enumerable: true,
    get: function () {
      return _module.foo;
    },
  });
});