/** .........
 * Flattens nested arrays into single array.
 *
 * @param {Array} arr - The array that needs flattening.
 * @example
 * // returns ['a', 'b', 'c']
 * deepflat(['a', ['b', ['c']]])
 * @returns {Array} - The flattened array.
 */
const deepflat = (arr) => {
  const result = [];
  for (const elem of arr) {
    if (!Array.isArray(elem)) {
      result.push(elem);
    } else {
      const flattened = deepflat(elem);
      result.push(...flattened);
    }
  }

  return result;
};

export default deepflat;
