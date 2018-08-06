/**
 * Implement the EventEmitter Class from NodeJS as a node module.
 * Only the on() and emit() methods are needed.
 *
 * https://nodejs.org/api/events.html
 */

/** Class that micmicks the EventEmitter node module. */
class EventEmitter {
  /**
   * Create an EventEmitter.
   */
  constructor() {
    // Events will be in the format { eventName: [callback1, callback2, ...] }
    this.events = {};
  }

  /**
   * Register a listener that listens for a specified event
   * and a callback to be called when the event is emitted.
   * @param {string} eventName - The name of event to listen to.
   * @param {function} callback - The callback function to be triggered upon event.
   */
  on(eventName, callback) {
    // Parameter error-checks
    if (typeof eventName !== 'string' || eventName.length === 0) {
      throw new Error('eventName must be a non-empty string');
    }

    if (typeof callback !== 'function') {
      throw new Error('callback must be a function');
    }

    // Add to events
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  /**
   * Emit to registered listeners of the specified event to trigger the callback
   * functions corresponding to that event.
   * @param {string} eventName - The name of event to trigger.
   * @param {*} callback - The callback function to be triggered upon event.
   */
  emit(eventName, data) {
    // eventName error-check
    if (typeof eventName !== 'string' || eventName.length === 0) {
      throw new Error('eventName must be a non-empty string');
    }

    if (this.events.hasOwnProperty([eventName])) {
      // Only run if the eventName exists
      this.events[eventName].forEach(callback => {
        callback(data);
      });
    } else {
      // Otherwise throw error
      throw new Error(`A listener for ${eventName} doesn't exist`);
    }
  }
}

module.exports = { EventEmitter };

/**
 * (b) What are some performance issues with your implementation?
 *     Bugs?
 */

/*
First off, my crude implementation cannot handle more than one additional argument (`data`) to the emit() method. Any additional arguments will be ignored.

Second, to correctly execute the callback function registered through the on() method, the developer must pass in the appropriate parameter (`data`) attributed to the `eventName`.

Also, my implementation does not have a cap on the number of
listeners that can be attached to a specific event. So in the case that
a malicious code decides to attach 10000 listeners for the eventName 'evil'
by calling emitterInstance.on('evil', evilFunction), the emitterInstance will have to:

(1) allocate that much memory in space to hold all those listeners in the array, and
(2) when that event is emitted, my code will stall until all the callback functions
    attached to that event finish running because the callbacks are run synchronously.

Though this is not a bug, something to be aware of is when an error occurs within the EventEmitter instance. If there is no registered listener for the 'error' event and an 'error' event is emitted, the application will crash. Therefore, a general best practice is to always register a listener to handle 'error' events.
*/
