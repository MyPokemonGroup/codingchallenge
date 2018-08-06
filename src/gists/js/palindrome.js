/**
 * Returns true if the inputString is a palindrome, false if not.
 * The function only works for non-unicode characters and is case-sensitive.
 * @param {string} inputString - The string to check.
 * @return {boolean} true if inputString is a palindrome, false if not.
 */
function palindrome(inputString) {
  // Error-checking
  if (typeof inputString !== 'string' || inputString.length === 0) {
    throw new Error('input must be a non-empty string');
  }

  // Only iterate up to middle character
  for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
    let currentChar = inputString[i];
    // Corresponds to equidistant character from end of string
    let otherChar = inputString[inputString.length - 1 - i];

    if (currentChar !== otherChar) {
      return false;
    }
  }
  return true;
}

module.exports = { palindrome };
