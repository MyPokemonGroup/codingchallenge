let assert = require('chai').assert;
let { uniqueArray, uniqueArraySorted } = require('./../lib/uniquearray');

describe('Unique Array', function() {
    describe('uniqueArray(inputArray)', function() {
        it('should return original input if inputArray is not an array or inputArray is empty', function() {
            assert.equal(uniqueArray(undefined), undefined);
            assert.equal(uniqueArray(null), null);
            assert.sameMembers(uniqueArray([]), []);
            assert.equal(uniqueArray(123), 123);
            assert.equal(uniqueArray('abc'), 'abc');
        });

        it('should throw error if not elements inside input array is a number', function() {
            assert.throws(()=>uniqueArray([1,undefined,2]), TypeError);
            assert.throws(()=>uniqueArray([1,'abc',2]), TypeError);
            assert.throws(()=>uniqueArray([1,[],2]), TypeError);
            assert.throws(()=>uniqueArray([1,{},2]), TypeError);
            assert.throws(()=>uniqueArray([1,null,2]), TypeError);
        });

        it('should return an unique array given a valid input array', function() {
            assert.sameOrderedMembers(uniqueArray([3,3,5,2,1,1,1,4,7]), [3,5,2,1,4,7]);
            assert.sameOrderedMembers(uniqueArray([1,1,1,1,1,1,1,1,1]), [1]);
            assert.sameOrderedMembers(uniqueArray([0]), [0]);
        });
    });

    describe('uniqueArraySorted(inputArray)', function() {
        it('should return original input if inputArray is not an array or inputArray is empty', function() {
            assert.equal(uniqueArraySorted(undefined), undefined);
            assert.equal(uniqueArraySorted(null), null);
            assert.sameMembers(uniqueArraySorted([]), []);
            assert.equal(uniqueArraySorted(123), 123);
            assert.equal(uniqueArraySorted('abc'), 'abc');
        });

        it('should throw error if not elements inside input array is a number', function() {
            assert.throws(()=>uniqueArraySorted([1,undefined,2]), TypeError);
            assert.throws(()=>uniqueArraySorted([1,'abc',2]), TypeError);
            assert.throws(()=>uniqueArraySorted([1,[],2]), TypeError);
            assert.throws(()=>uniqueArraySorted([1,{},2]), TypeError);
            assert.throws(()=>uniqueArraySorted([1,null,2]), TypeError);
        });

        it('should return an unique sorted array given a valid input array', function() {
            assert.sameOrderedMembers(uniqueArraySorted([3,3,5,2,1,1,1,4,7]), [1,2,3,4,5,7]);
            assert.sameOrderedMembers(uniqueArraySorted([1,1,1,1,1,1,1,1,1]), [1]);
            assert.sameOrderedMembers(uniqueArraySorted([0]), [0]);

        });

        it('should not maintain order', function() {
            assert.notSameOrderedMembers(uniqueArraySorted([3,3,5,2,1,1,1,4,7]), [3,5,2,1,4,7]);
        });
    });
});