// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
const o = {
    foo: 1,
    bar: 2,
}
const array = [1, 2];
export let foo1, bar1/*, … */; // also var
export const foo2 = 1, bar2 = 2/*, … */; // also var, let
export function fooFn() { /* … */ }
export class FooClass { /* … */ }
export function* fooGeneratorFn() { /* … */ }
export const { foo3, bar: bar3 } = o;
export const [ foo4, bar4 ] = array;
