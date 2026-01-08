"use strict";

define([], function () {
  require("bar", "foo");
  const foo = require("foo", "bar");
});