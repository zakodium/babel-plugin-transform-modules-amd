"use strict";

define(["exports"], function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  exports.foo4 =
    exports.foo3 =
    exports.foo2 =
    exports.foo1 =
    exports.bar4 =
    exports.bar3 =
    exports.bar2 =
    exports.bar1 =
    exports.FooClass =
      void 0;
  exports.fooFn = fooFn;
  exports.fooGeneratorFn = fooGeneratorFn;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
  const o = {
    foo: 1,
    bar: 2,
  };
  const array = [1, 2];
  let foo1 = (exports.foo1 = void 0),
    bar1 = (exports.bar1 = void 0); /*, … */ // also var
  const foo2 = (exports.foo2 = 1),
    bar2 = (exports.bar2 = 2); /*, … */ // also var, let
  function fooFn() {
    /* … */
  }
  class FooClass {
    /* … */
  }
  exports.FooClass = FooClass;
  function* fooGeneratorFn() {
    /* … */
  }
  const foo3 = (exports.foo3 = o.foo3),
    bar3 = (exports.bar3 = o.bar);
  const foo4 = (exports.foo4 = array[0]),
    bar4 = (exports.bar4 = array[1]);
});