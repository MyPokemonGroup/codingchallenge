/**
 * Returns an array of unique elements from an unsorted
 * array of integers. Duplicate values are condensed to one element.
 * @param {array} inputArray - The array of integers.
 * @return {array} The array of unique integers.
 */
function uniqueArray(inputArray) {
  // Error-check for inputArray
  if (!Array.isArray(inputArray) || !inputArray.length) {
    throw new Error('input must be a non-empty array');
  }

  const uniqueNums = [];
  const set = new Set();

  for (let num of inputArray) {
    // Error-check for element of inputArray
    if (typeof num !== 'number') {
      throw new Error('input must only contain numbers');
    }
    if (!set.has(num)) {
      set.add(num);
      uniqueNums.push(num);
    }
  }

  return uniqueNums;
}

module.exports = { uniqueArray };
