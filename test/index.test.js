// * These tests ensure the exported interfaces under test function as expected.

import { pluginTester } from "babel-plugin-tester";

import plugin from "../src/index.js";

// eslint-disable-next-line jest/require-hook
pluginTester({
  plugin,
  fixtures: "fixtures",
  babelOptions: {
    parserOpts: { strictMode: true },
    plugins: ["@babel/plugin-transform-destructuring"],
  },
});
