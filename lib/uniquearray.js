/**
 * Add elements in inputArray to hash set:
 * if element in hash set, do not add to output array,
 * otherwise add to hash set and add to outputArray
 *
 * @param inputArray list of integers
 */
function uniqueArray(inputArray) {

    // if input is not array or is empty, pass through
    if (!Array.isArray(inputArray) || inputArray.length === 0) {
        return inputArray;
    }

    let hashSet = new Set();
    let outputArray = [];

    for (let num of inputArray) {
        // make sure all elements in the array are numbers
        if (typeof num !== 'number') {
            throw new TypeError("element inside inputArray must be a number");
        }

        // if num has not been seen before, add to outputArray
        if (!hashSet.has(num)) {
            hashSet.add(num);
            outputArray.push(num);
        }
    }

    return outputArray;
}

/**
 * function used to display formatted code in html browser
 * @returns {string}
 */
uniqueArray.codeString = function() {
    return this.toString().split('\n').map((line) => '    ' + line).join('\n');
};

/**
 * Sort the input array:
 *
 * sort the array in place
 *
 * use a duplicate_index pointer to determine whether to copy next value over
 *
 * use an index iterator to keep track of whenever current value is greater than previous value
 *
 * if current value greater than duplicate_index,
 * then set duplicate_index to current value and increment duplicate_index
 *
 * @param inputArray list of integers
 */
function uniqueArraySorted(inputArray) {

    // if input is not array or is empty, pass through
    if (!Array.isArray(inputArray) || inputArray.length === 0) {
        return inputArray;
    }

    // numeric sort
    inputArray.sort((a,b)=>a-b);

    let duplicate_index = 1;
    let largestSoFar = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
        if (typeof largestSoFar !== 'number' || typeof inputArray[i] !== 'number') {
            throw new TypeError("element inside inputArray must be a number");
        }
        //if value at previous duplicate index is < current value
        if (largestSoFar < inputArray[i]) {
            largestSoFar = inputArray[i];
            inputArray[duplicate_index++] = inputArray[i];
        }
    }

    return inputArray.slice(0, duplicate_index);
}

/**
 * function used to display formatted code in html browser
 * @returns {string}
 */
uniqueArraySorted.codeString = function() {
    return this.toString().split('\n').map((line) => '    ' + line).join('\n');
};

module.exports = {
    uniqueArray,
    uniqueArraySorted
};