const assert = require('chai').assert;
const problem = require('../lib/DesignPatterns');
const sinon = require('sinon');
// Set test order
// require('./ControllingScopeTest');

const EventEmitter = problem.EventEmitter;

describe('EventEmitter', () => {
  describe('#on()', function() {
    describe('Error-checking tests', function() {
      it('should throw error for no eventName', function() {
        const emitter = new EventEmitter();

        assert.throws(
          function() {
            emitter.on();
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for empty string eventName', function() {
        const emitter = new EventEmitter();
        const eventName = '';

        assert.throws(
          function() {
            emitter.on(eventName);
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for non-string eventName', function() {
        const emitter = new EventEmitter();
        const eventName = {};

        assert.throws(
          function() {
            emitter.on(eventName);
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for valid eventName and no callback', function() {
        const emitter = new EventEmitter();
        const eventName = 'event';

        assert.throws(
          function() {
            emitter.on(eventName);
          },
          Error,
          'callback must be a function'
        );
      });
      it('should throw error for valid eventName and non-function callback', function() {
        const emitter = new EventEmitter();
        const eventName = 'event';
        const callback = {};

        assert.throws(
          function() {
            emitter.on(eventName, callback);
          },
          Error,
          'callback must be a function'
        );
      });
    });
    describe('Correctness tests', function() {
      it('should correctly register 1 event and 1 callback', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy();
        const eventName = 'event';

        // Register event
        emitter.on(eventName, callback);

        // Check if registered callback is the same callback as the spy
        const registeredcallback = emitter.events[eventName];
        const expectedcallback = [callback];

        assert.deepEqual(registeredcallback, expectedcallback);
      });
      it('should correctly register 1 event and 2 callbacks to same event', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy();
        const eventName = 'event';

        // Register two events
        emitter.on(eventName, callback);
        emitter.on(eventName, callback);

        // Check if registered callbacks are the same as spy callbacks
        const registeredcallbacks = emitter.events[eventName];
        const expectedcallbacks = [callback, callback];

        assert.deepEqual(registeredcallbacks, expectedcallbacks);
      });
      it('should correctly register 2 different events with callback for each event', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy();
        const eventName1 = 'event1';
        const eventName2 = 'event2';

        // Register two different events
        emitter.on(eventName1, callback);
        emitter.on(eventName2, callback);

        const registeredEvents = emitter.events;
        const expectedEvents = {
          [eventName1]: [callback],
          [eventName2]: [callback]
        };

        assert.deepEqual(registeredEvents, expectedEvents);
      });
      it('should correctly register 2 different events with 2 callbacks for each event', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy();
        const eventName1 = 'event1';
        const eventName2 = 'event2';

        // Register two different events
        emitter.on(eventName1, callback);
        emitter.on(eventName1, callback);
        emitter.on(eventName2, callback);
        emitter.on(eventName2, callback);

        const registeredEvents = emitter.events;
        const expectedEvents = {
          [eventName1]: [callback, callback],
          [eventName2]: [callback, callback]
        };

        assert.deepEqual(registeredEvents, expectedEvents);
      });
    });
  });
  describe('#emit()', function() {
    describe('Error-checking tests', function() {
      it('should throw error for no eventName', function() {
        const emitter = new EventEmitter();

        assert.throws(
          function() {
            emitter.emit();
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for empty string eventName', function() {
        const emitter = new EventEmitter();
        const eventName = '';

        assert.throws(
          function() {
            emitter.emit(eventName);
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for non-string eventName', function() {
        const emitter = new EventEmitter();
        const eventName = {};

        assert.throws(
          function() {
            emitter.emit(eventName);
          },
          Error,
          'eventName must be a non-empty string'
        );
      });
      it('should throw error for eventName that is not registered', function() {
        const emitter = new EventEmitter();
        const eventName = 'event';
        const fakeEventName = 'fakeEvent';
        const callback = sinon.spy();

        // Register listener
        emitter.on(eventName, callback);

        assert.throws(
          function() {
            emitter.emit(fakeEventName, callback);
          },
          Error,
          `A listener for ${fakeEventName} doesn't exist`
        );
      });
    });
    describe('Correctness tests', function() {
      it('should correctly emit a registered event and call its callback with 0 parameters', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy();
        const eventName = 'event';

        // Register event
        emitter.on(eventName, callback);
        // Emit callback
        emitter.emit(eventName);

        sinon.assert.calledOnce(callback);
      });
      it('should correctly emit a registered event and call its callback with 1 parameter passed', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy(data => data);
        const eventName = 'event';
        const data = 'test';

        // Register event
        emitter.on(eventName, callback);
        // Emit callback with data
        emitter.emit(eventName, data);

        sinon.assert.calledWith(callback, data);
      });
      it('should correctly emit a registered event and call its callback, ignoring extra parameters', function() {
        const emitter = new EventEmitter();
        const callback = sinon.spy(data => data);
        const eventName = 'event';
        const data = 'test';

        // Register event
        emitter.on(eventName, callback);
        // Emit callback with multiple parameters
        emitter.emit(eventName, data, data, data);

        sinon.assert.calledWith(callback, data);
      });
    });
  });
});
