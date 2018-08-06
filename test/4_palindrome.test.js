const assert = require('chai').assert;
const problem = require('../lib/CS2');

// Set test order
// require('./CS1Test');

const palindrome = problem.palindrome;

describe('palindrome', function() {
  describe('Error-checking tests', function() {
    it('should throw error for no input', function() {
      assert.throws(
        function() {
          palindrome();
        },
        Error,
        'input must be a non-empty string'
      );
    });
    it('should throw error for non-string input', function() {
      const input = 1;

      assert.throws(
        function() {
          palindrome(input);
        },
        Error,
        'input must be a non-empty string'
      );
    });
    it('should throw error for empty string input', function() {
      const input = '';

      assert.throws(
        function() {
          palindrome(input);
        },
        Error,
        'input must be a non-empty string'
      );
    });
  });

  describe('Correctness tests', function() {
    it('should return a boolean', function() {
      const input = 'a';
      const result = palindrome(input);

      assert.typeOf(result, 'boolean');
    });
    it('should return true for string of one lowercase character', function() {
      const input = 'a';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for string of one uppercase character', function() {
      const input = 'A';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for string of one number character', function() {
      const input = '5';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for string of one non-alphanumeric character', function() {
      const input = '.';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return false for all lowercase non-palindromic string', function() {
      const input = 'ab';
      const result = palindrome(input);

      assert.equal(result, false);
    });
    it('should return false for all uppercase non-palindromic string', function() {
      const input = 'ABC';
      const result = palindrome(input);

      assert.equal(result, false);
    });
    it('should return false for all number non-palindromic string', function() {
      const input = '57';
      const result = palindrome(input);

      assert.equal(result, false);
    });
    it('should return false for all non-alphanumeric non-palindromic string', function() {
      const input = '.?';
      const result = palindrome(input);

      assert.equal(result, false);
    });
    it('should return true for all lowercase palindromic string', function() {
      const input = 'abba';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for all uppercase palindromic string', function() {
      const input = 'PPPP';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for all number palindromic string', function() {
      const input = '1001';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return true for all non-alphanumeric palindromic string', function() {
      const input = '?%?';
      const result = palindrome(input);

      assert.equal(result, true);
    });
    it('should return false for mixed non-palindromic string', function() {
      const input = '?gg?  ';
      const result = palindrome(input);

      assert.equal(result, false);
    });
    it('should return true for mixed palindromic string', function() {
      const input = '  ?gg?  ';
      const result = palindrome(input);

      assert.equal(result, true);
    });
  });
});
