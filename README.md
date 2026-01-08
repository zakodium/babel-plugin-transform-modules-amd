# @zakodium/babel-plugin-transform-modules-amd

Transforms modules / require to AMD modules, only if they aren't already AMD modules or require configs.

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

```js
// Import statements
import "foo";
import foo from "foo";
import { foo } from "./foo";
import { foo as bar } from "./foo";

// require statements
require("foo");
const foo = require("foo");
// ⚠️ Descructuring is not supported out of the box
// Make sure to add an extra plugin to your babel config which transforms destructuring
const { foo } = require("foo");
```

# License

See [LICENSE.md](./LICENSE.md)
