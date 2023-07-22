/**
 * Flattens an array, even deeply nested ones.
 *
 * @param {Array} arr - The array that needs flattening.
 * @throws {TypeError} - Throws when the passed argument is not an array.
 * @example
 * // retuns -> ['a', 'b', 'c']
 * deepflat(['a', ['b', ['c']]])
 * @returns {Array} The flattened array.
 */
export const deepflat = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Only arrays are supported');
  }

  const result = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      const nestedResult = deepflat(elem);
      result.push(...nestedResult);
    } else {
      result.push(elem);
    }
  }
  return result;
};
