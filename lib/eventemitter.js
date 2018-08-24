class EventEmitter {

    /**
     * constructor
     *
     * @param limit max capacity of listeners for this EventEmitter
     */
    constructor(limit = 5000) {
        this.events = {};
        this.limit = 5000;
    }

    /**
     * Adds event listeners to EventEmitter class
     *
     * @param eventName
     * @param listener
     * @param limit
     * @returns {EventEmitter}
     */
    on(eventName, listener) {

        // eventName has to be a non-empty string
        if (typeof eventName !== 'string' || eventName.length === 0) {
            throw new TypeError("eventName must be a non-empty string");
        }

        // listener has to be a function
        if (typeof listener !== 'function') {
            throw new TypeError("listener must be a function");
        }

        let eventArr = [];

        // if there already exists some events in the emitter, prepend them before
        if (this.events.hasOwnProperty(eventName)) {
            eventArr = [...this.events[eventName]];
        }

        // throw error when trying to add a listener past the limit
        if (this.limit === 0) {
            throw new RangeError("cannot add more listeners, events at max capacity");
        }

        // add the listener argument passed in
        eventArr.push(listener);
        this.limit--;


        // set event arrays to event name
        this.events[eventName] = eventArr;

        //return reference according to doc
        return this;
    }

    /**
     * Calls all the functions linked to the eventName
     *
     * @param eventName
     * @param args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        // eventName has to be a non-empty string
        if (typeof eventName !== 'string' || eventName.length === 0) {
            throw new TypeError("eventName must be a non-empty string");
        }

        // return false if no eventName is found in the emitter
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }

        const eventListeners = this.events[eventName];

        // return false if eventListeners aren't arrays or is empty
        if (!Array.isArray(eventListeners) || eventListeners.length === 0) {
            return false;
        }

        // try to call all the functions synchronously
        try {
            for (let fn of eventListeners) {
                // if there are args, pass args to function, else call function
                if (args !== undefined || args !== null || args.length > 0) {
                    fn(...args);
                } else {
                    fn();
                }
            }
        } catch (err) {
            throw err;
        }

        return true;
    }

    /**
     * Getter for events property
     *
     * @returns {*}
     */
    get eventsMap() {
        return this.events;
    }

    /**
     * function used to display formatted code in html browser
     *
     * @returns {string}
     */
    static codeString() {
        return this.toString().split('\n').map((line) => '    ' +  line).join('\n');
    }
}

module.exports = EventEmitter;