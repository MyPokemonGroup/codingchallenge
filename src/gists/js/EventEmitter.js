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
