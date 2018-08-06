/**
 * Create a function that returns the unique elements from
 * an unsorted array of integers.
 *
 */

// Assumption: I'm assuming that the function condenses duplicates to unique values
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

  // return an array
  return uniqueNums;
}

module.exports = { uniqueArray };

/**
 * (b) Write the Big-O for time and space complexity for the above question.
 *     Explain why.
 */

/*
Runtime: O(n), where n is the length of inputArray

Initializing uniqueNums and set are O(1) operations.

Next, let’s take a look inside the for-loop. Accessing and adding an element inside a set takes O(1) time; adding an element to the end of the array takes an amortized O(1) time. So the loop body runtime complexity is O(1).

We see that the for-loop iterates n times, where n is the length of inputArray. So the runtime complexity for the for-loop is O(n).

So adding those up, we have O(1) + O(n), which just simplifies to O(n), since O(n) is the leading term and we ignore all other terms.

================================================================================

Space: O(n), where n is the length of inputArray

In the worst-case scenario (that takes up the most space), all numbers of inputArray will be unique. In that case, we would have to store all the elements of the inputArray into both set and uniqueNums. That’d give us O(2n), but since it’s Big-O, we drop the coefficient, giving us O(n), where n is the length of inputArray.
*/

/**
 * (c) Write the necessary error-checking.
 *     Explain how your error checking would be used during debugging.
 */

/*
The obvious point of possible error is the inputArray itself. The if-statement in the beginning of the function checks whether the inputArray is: (1) an array and (2) non-empty.

Inside the for-loop, we make sure that each element of the inputArray is a number.

If inputArray has any problems, then an exception is thrown with a clear message about the nature of the problem.

This is useful during debugging because if the application calls this function and the exception is thrown, it's very clear why the program was halted and the programmer can then fix the bug.
*/

/**
 * (d) Write a unit suite for the above method.
 *     Explain why the selection of test cases was chosen
 */

/*
I have two groups of tests: (1) Error-checking and (2) Correctness.

Error-checking tests make sure the correct errors are thrown when the error-triggering conditions occur.

Correctness tests make sure the function returns the correct type of value (array, in this case) and works correctly for different kinds of non-error raising inputs. I chose to test single number, multiple unique numbers, multiple non-unique numbers, and mixture of unique and non-unique numbers as they are reflective of the different scenarios the function may be used in.
*/
