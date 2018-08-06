const assert = require('chai').assert;
const problem = require('../lib/CS1');

// Set test order
// require('./DesignPatternsTest');

const uniqueArray = problem.uniqueArray;

describe('uniqueArray', function() {
  describe('Error-checking tests', function() {
    it('should throw error for no input', function() {
      assert.throws(
        function() {
          uniqueArray();
        },
        Error,
        'input must be a non-empty array'
      );
    });
    it('should throw error for non-array input', function() {
      const input = {};

      assert.throws(
        function() {
          uniqueArray(input);
        },
        Error,
        'input must be a non-empty array'
      );
    });
    it('should throw error for empty array input', function() {
      const input = [];

      assert.throws(
        function() {
          uniqueArray(input);
        },
        Error,
        'input must be a non-empty array'
      );
    });
    it('should throw error for non-number elements input', function() {
      const input = [5, 'bad input', 'another bad one'];

      assert.throws(
        function() {
          uniqueArray(input);
        },
        Error,
        'input must only contain numbers'
      );
    });
  });

  describe('Correctness tests', function() {
    it('should return an array', function() {
      const input = [5];
      const result = uniqueArray(input);

      assert.typeOf(result, 'array');
    });
    it('should work correctly for array of one number', function() {
      const input = [5];
      const result = uniqueArray(input);

      assert.deepEqual(result, [5]);
    });
    it('should work correctly for array of multiple unique numbers', function() {
      const input = [5, 6, 7];
      const result = uniqueArray(input);

      assert.deepEqual(result, [5, 6, 7]);
    });
    it('should work correctly for array of multiple non-unique numbers', function() {
      const input = [5, 5, 5, 5, 5];
      const result = uniqueArray(input);

      assert.deepEqual(result, [5]);
    });
    it('should work correctly for array of multiple unique and non-unique numbers', function() {
      const input = [5, 5, 5, 6, 7];
      const result = uniqueArray(input);

      assert.deepEqual(result, [5, 6, 7]);
    });
  });
});
