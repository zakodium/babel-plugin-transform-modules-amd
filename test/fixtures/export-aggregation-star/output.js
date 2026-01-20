"use strict";

define(["exports", "module"], function (exports, _module) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  Object.keys(_module).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _module[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _module[key];
      },
    });
  });
});