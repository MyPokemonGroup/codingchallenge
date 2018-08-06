/**
 * Create a function palindrome(inputString) which returns
 * true / false if the input is a palindrome.
 *
 */

// Assumption: case-sensitive, string is non-unicode
// Example: Racecar => false
//          RacecaR => true
function palindrome(inputString) {
  // Error-checking
  if (typeof inputString !== 'string' || inputString.length === 0) {
    throw new Error('input must be a non-empty string');
  }
  for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
    let currentChar = inputString[i];
    let otherChar = inputString[inputString.length - 1 - i];

    if (currentChar !== otherChar) {
      return false;
    }
  }
  return true;
}

module.exports = { palindrome };

/**
 * (b) Write the Big-O for time and space complexity for the above question.
 *     Explain why.
 */

/*
Runtime: O(n), where n is the length of inputString

The code is mostly comprised of the for-loop. In the body of the for-loop, we see that
initializing currentChar and otherChar are O(1) operations because array random access
based on index is O(1). The if-statement check and `return false` statement are all O(1).

We see that the for-loop iterates n/2 times, where n is the length of inputString.
We only iterate upto the middle element because this implementation checks that
the i-th character from the start is the same as i-th character from the end
of the string at each iteration. The runtime complexity for the for-loop is O(n/2).

In conclusion, the function's runtime will be O(n) since (n/2) simplifies is just
(1/2 * n), which in such case, we will drop the coefficient, just giving us O(n).

================================================================================

Space: O(1)

We are just storing two variables, currentChar and otherChar, at each iteration
of the for-loop. Since such assignments are independent of the size of the input,
i.e., length of the inputString, we get O(1) for space.
*/

/**
 * (c) Write the necessary error-checking.
 *     Explain how your error checking would be used during debugging.
 */

/*
The point of possible error is the inputString. The if-statement in the beginning of the function checks whether the inputString is: (1) a string and (2) non-empty.

If inputString has any problems, then an exception is thrown with a clear message about the nature of the problem.

This is useful during debugging because if the application calls this function and the exception is thrown, it's very clear why the program was halted and the programmer can then fix the bug.
*/

/**
 * (d) Write a unit suite for the above method.
 *     Explain why the selection of test cases was chosen
 */

/*
I have two groups of tests: (1) Error-checking and (2) Correctness.

Error-checking tests make sure the correct errors are thrown when the error-triggering conditions occur.

Correctness tests make sure the function returns the correct type of value (boolean, in this case) and works correctly for different kinds of non-error raising inputs.

My implementation of the function is case-sensitive, meaning "Dad" would not be a palindrome. I tested that all single-length alphanumeric and non-alphanumeric inputs return true. I also tested for true/false cases of >1 length same-type of inputs. I finally concluded the test cases with true/false cases of mixed-type inputs.
*/
