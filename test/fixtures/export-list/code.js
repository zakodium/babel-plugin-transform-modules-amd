// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
let foo1 = 1, bar1 = 2, foo2 = 3, bar2 = 4, foo3 = 5, foo4 = 6;
export { foo1, bar1 };
export { foo2 as _foo2, bar2 as _bar2 };
export { foo3 as "string name" };
export { foo4 as default /*, … */ };
