function palindrome(inputString) {

    //if input isn't even a string, return false
    if (typeof inputString !== 'string') {
        return false;
    }

    //not sure whether empty string is a palindrome, so return true
    if (inputString.length <= 1) {
        return true;
    }

    let left = 0;
    let right = inputString.length-1;

    //start from left/right and work toward middle
    while (left < right) {
        if (inputString[left++] !== inputString[right--]) {
            return false;
        }
    }

    return true;
}

palindrome.codeString = function () {
    return this.toString().split('\n').map((line) => '    ' + line).join('\n');
};

module.exports = palindrome;

