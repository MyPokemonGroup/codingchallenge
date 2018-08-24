let assert = require('chai').assert;
const palindrome = require('./../lib/palindrome');

describe("Palindrome", function() {
    it('should return false if inputString is not type string', function() {
        assert.isNotTrue(palindrome(undefined));
        assert.isNotTrue(palindrome(null));
        assert.isNotTrue(palindrome(123));
        assert.isNotTrue(palindrome([]));
        assert.isNotTrue(palindrome({}));
    });

    it('should return true if inputString is empty or its length is 1', function() {
        assert.isTrue(palindrome(''));
        assert.isTrue(palindrome('a'));
    });

    it('should return false if inputString is not a palindrome', function() {
        assert.isNotTrue(palindrome('ab'));
        assert.isNotTrue(palindrome('abca'));
        assert.isNotTrue(palindrome('cbba'));
    });

    it('should return true if inputString is a palindrome', function() {
        assert.isTrue(palindrome('aa'));
        assert.isTrue(palindrome('aba'));
        assert.isTrue(palindrome('aaabbcbbaaa'));
        assert.isTrue(palindrome('aaabbbbaaa'));
    });
});