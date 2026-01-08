"use strict";

define(["foo", "./foo/bar"], function (_require, _require2) {
  const foo = _require.foo;
  const fooBar = _require2.fooBar;
});