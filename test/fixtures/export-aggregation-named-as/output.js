"use strict";

define(["exports", "module"], function (exports, _module) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  Object.defineProperty(exports, "_bar", {
    enumerable: true,
    get: function () {
      return _module.bar;
    },
  });
  Object.defineProperty(exports, "_foo", {
    enumerable: true,
    get: function () {
      return _module.foo;
    },
  });
});