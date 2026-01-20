"use strict";

define(["exports"], function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  exports["string name"] =
    exports.foo1 =
    exports.default =
    exports.bar1 =
    exports._foo2 =
    exports._bar2 =
      void 0;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
  let foo1 = (exports.foo1 = 1),
    bar1 = (exports.bar1 = 2),
    foo2 = (exports._foo2 = 3),
    bar2 = (exports._bar2 = 4),
    foo3 = (exports["string name"] = 5),
    foo4 = (exports.default = 6);
});