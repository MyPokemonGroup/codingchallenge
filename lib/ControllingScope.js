/**
 * Create a function limitedAlert() which shows an alert when
 * it's called, but only up to 3 calls
 * Examples:
 * First
 * limitedAlert('something went wrong') // show alert
 * limitedAlert('something went wrong') // show alert
 * limitedAlert('something went wrong') // show alert
 * limitedAlert('something went wrong') // NO MORE ALERTS
 */

/**
 * Custom alert() function since alert() is not part of Node.
 * If in Node, it will console.log() the message instead.
 *
 * @param message message to be alerted/logged to console
 */
function alertFunction(message) {
  if (this.alert === undefined) {
    console.log(message);
  } else {
    this.alert(message);
  }
}

/**
 * Function which shows an alert
 *
 * @param message message to be alerted
 */
function limitedAlert(message) {
  if (limitedAlert.calledTimes < 3) {
    limitedAlert.calledTimes++;
    alertFunction(message);
  }
}
limitedAlert.calledTimes = 0;

module.exports = {
  limitedAlert
};

/**
 * (a) Can you do it without exposing a global variable?
 *     Why would that be important?
 */

/*
Yes, since even functions are objects in JavaScript, I can make a property
called “calledTimes” that gets incremented every time the function is called.

Not polluting the global namespace in JavaScript is important because other
js script files share the global namespace. So for instance, if limitedAlert()
is in scriptA.js and I used a global variable count, that variable can be
accessed and overwritten in another scriptB.js.
*/
