"use strict";

define(["foo", "bar", "./directory/foo-bar"], function (_foo, _bar, _fooBar) {
  console.log(_foo.foo, _bar.bar, _fooBar.fooBar);
});