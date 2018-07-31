let jsbeautifier = require('js-beautify').js_beautify;

/**
 * Takes in an array and quickly sorts the array
 *
 * @param arr unsorted array
 */
function quicksort(arr) {
    let new_arr = arr.slice();
    quicksortHelper(new_arr, 0, new_arr.length-1);
    return new_arr;
}

function quicksortHelper(arr, lo, hi) {
    if (lo < hi) {
        let pivotIndex = sortPivot(arr, lo, hi);
        quicksortHelper(arr, lo, pivotIndex - 1);
        quicksortHelper(arr, pivotIndex + 1, hi);
    }
}

function sortPivot(arr, lo, hi) {
    let pivotIndex = hi;
    hi--;
    while (lo < hi) {
        while(arr[lo] < arr[pivotIndex]) lo++;
        while(arr[hi] > arr[pivotIndex] && hi > lo) hi--;
        if (arr[lo] > arr[pivotIndex] && hi !== lo) {
            let temp = arr[lo];
            arr[lo] = arr[hi];
            arr[hi] = temp;
            lo++;
            hi--;
        }
    }
    if (arr[lo] > arr[pivotIndex]) {
      let temp = arr[lo];
      arr[lo] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
    return lo;
}

quicksort.fullString = function() {
    let code ='\n' + quicksort.toString() + '\n\n' + quicksortHelper.toString() + '\n\n' + sortPivot.toString();
    // code = code.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return code;
};

module.exports.quicksort = quicksort;
