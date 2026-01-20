# @zakodium/babel-plugin-transform-modules-amd

Transforms modules / require to AMD modules, only if they aren't already AMD modules or require configs.

<h3 align="center">

  <a href="https://www.zakodium.com">
    <img src="https://www.zakodium.com/brand/zakodium-logo-white.svg" width="50" alt="Zakodium logo" />
  </a>

  <p>
    Maintained by <a href="https://www.zakodium.com">Zakodium</a>
  </p>

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

## Installation

```sh
$ npm install @zakodium/babel-plugin-transform-modules-amd
```

## Usage

### Via `babel.config.js`

```js
export default {
  plugins: [
    // This extra plugin is needed if you want to support destructuring when requiring modules
    "@babel/plugin-transform-destructuring",
    "@zakodium/babel-plugin-transform-modules-amd",
  ],
};
```

## Supported syntax

All [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements are supported, but some require to setup your babel config with additional plugins to work.

```js
// ⚠️ Descructuring is not supported out of the box
// Make sure to add "@babel/plugin-transform-destructuring" plugin to your babel config
const { foo } = require("foo");

// ⚠️ Exporting to a namespace is not supported out of the box
// Make sure add the "@babel/plugin-transform-export-namespace-from" plugin to your babel config
export * as foo from "./foo";
```

# License

See [LICENSE.md](./LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/@zakodium/babel-plugin-transform-modules-amd.svg
[npm-url]: https://www.npmjs.com/package/@zakodium/babel-plugin-transform-modules-amd
[ci-image]: https://github.com/zakodium/babel-plugin-transform-modules-amd/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/zakodium/babel-plugin-transform-modules-amd/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/zakodium/babel-plugin-transform-modules-amd.svg
[codecov-url]: https://codecov.io/gh/zakodium/babel-plugin-transform-modules-amd
[download-image]: https://img.shields.io/npm/dm/@zakodium/babel-plugin-transform-modules-amd.svg
[download-url]: https://www.npmjs.com/package/@zakodium/babel-plugin-transform-modules-amd
