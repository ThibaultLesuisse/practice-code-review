/**
 * Flattens nested arrays into single array
 * @param {Array} arr The array that needs flattening
 * @example
 * // returns ['a', 'b', 'c']
 * deepflat(['a', ['b', ['c']]])
 * @returns {Array} the flattened array
 */
function deepflat(arr) {
  var result = [];
  for (const elem of arr) {
    if (!Array.isArray(elem)) {
      result.push(elem);
    } else {
      let flattened = deepflat(elem);
      result.push(...flattened);
    }
  }

  return result;
}

export default deepflat;
