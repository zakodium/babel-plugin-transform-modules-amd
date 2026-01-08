# @zakodium/babel-plugin-transform-modules-amd

[![Build Status](https://travis-ci.org/kayneb/babel-plugin-transform-es2015-modules-amd-if-required.svg?branch=master)](https://travis-ci.org/kayneb/babel-plugin-transform-es2015-modules-amd-if-required)
[![Coverage Status](https://coveralls.io/repos/kayneb/babel-plugin-transform-es2015-modules-amd-if-required/badge.svg)](https://coveralls.io/r/kayneb/babel-plugin-transform-es2015-modules-amd-if-required)

Transforms ES2015 modules to AMD modules, only if they aren't already AMD modules or require configs.

## Installation

```sh
$ npm install @zakodium/babel-plugin-transform-modules-amd
```

## Usage

### Via `.babelrc` (Recommended)

**babel.config.js**

```js
export default {
  plugins: [
    // This extra plugin is needed if you want to support destructuring when requiring modules
    '@babel/plugin-transform-destructuring',
    '@zakodium/babel-plugin-transform-modules-amd'
  ]
}
```

## Supported syntax

```js
// Import statements
import 'foo';
import foo from 'foo';
import { foo } from './foo';
import { foo as bar } from './foo';

// require statements
require('foo');
const foo = require('foo');
// ⚠️ Descructuring is not supported out of the box
// Make sure to add an extra plugin to your babel config which transforms destructuring
const { foo } = require('foo');
```

# License
See [LICENSE.md](./LICENSE.md)
