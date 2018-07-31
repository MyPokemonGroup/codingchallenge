let assert = require('chai').assert;
let quicksort = require('./../lib/quicksort.js').quicksort;

describe('Quick Sort', function() {
  it('should return [1,2,3] with input [3,1,2]', function() {
    assert.sameOrderedMembers(quicksort([3,1,2]), [1,2,3]);
  });
  it('should return [1,2,3] with input [1,2,3]', function() {
    assert.sameOrderedMembers(quicksort([1,2,3]), [1,2,3]);
  });
  it('should return [3,2,1] with input [1,2,3]', function() {
    assert.sameOrderedMembers(quicksort([3,2,1]), [1,2,3]);
  });
  it('should return [5,4,3,2,1] with input [1,2,3,4,5]', function() {
    assert.sameOrderedMembers(quicksort([1,2,3,4,5]), [1,2,3,4,5]);
  });
});
