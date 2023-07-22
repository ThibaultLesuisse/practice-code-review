# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */
```
## Strategy

Recursion will be used to try and tackle deeply nested arrays.
If we notice that one element of an array is an array we recursively call the function

## Use cases
```js
let products = ['apple', ['pear', 'cherry']];
let flattenedFruits = deepFlat(products);
console.log(flattenedFruits);
```
> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)
