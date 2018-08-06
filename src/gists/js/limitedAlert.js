/**
 * Custom alert() function since alert() is not part of Node.
 * If in Node, it will console.log() the message instead.
 * @param {string} message - The message to be alerted/logged to console.
 */
function alertFunction(message) {
  if (this.alert === undefined) {
    console.log(message);
  } else {
    this.alert(message);
  }
}

/**
 * Function which shows an alert only up to three times.
 * Subsequent calls to the function will not do anything.
 * @param {string} message - The message to be alerted.
 */
function limitedAlert(message) {
  if (limitedAlert.calledTimes < 3) {
    limitedAlert.calledTimes++;
    alertFunction(message);
  }
}

// Property that stores the number of times limitedAlert() is called.
limitedAlert.calledTimes = 0;

module.exports = {
  limitedAlert
};
