const assert = require('chai').assert;
const sinon = require('sinon');
const EventEmitter = require('./../lib/eventemitter');


let eventEmitter = new EventEmitter();
// console.log(eventEmitter.on);

describe('Event Emitter', function() {
    describe('EventEmitter.on(eventName, listener)', function() {
        let eventEmitter;

        beforeEach(function() {
            eventEmitter = new EventEmitter();
        });

        it('should not accept undefined, null, and empty eventNames', function() {
            assert.throws(()=>eventEmitter.on(undefined, undefined), TypeError, 'eventName must be a non-empty string');
            assert.throws(()=>eventEmitter.on(null, null), TypeError, 'eventName must be a non-empty string');
            assert.throws(()=>eventEmitter.on("", null), TypeError, 'eventName must be a non-empty string');
        });

        it('should store functions in good event Name', function() {
            eventEmitter.on("summation", (a, b) => a + b);
            eventEmitter.on("summation", (a, b) => a + b);
            eventEmitter.on("summation", (a) => a + a);
            eventEmitter.on("subtraction", (a, b) => a - b);

            assert.isTrue(eventEmitter.eventsMap.hasOwnProperty("summation"));
            assert.isTrue(eventEmitter.eventsMap.hasOwnProperty("subtraction"));
        });

        it('should not accept undefined nor null functions', function() {
            assert.throws(() => eventEmitter.on("summation", undefined), TypeError, "listener must be a function");
            assert.throws(() => eventEmitter.on("summation", null), TypeError, "listener must be a function");
        });

        it('should throw RangeError when listeners added exceeds a certain limit (default=5000)', function () {
            for (let i = 0; i < 5000; i++) {
                eventEmitter.on("summation", (a,b) => a + b);
            }
            assert.throws(() => eventEmitter.on("subtraction", (a, b) => a - b),
                RangeError, "cannot add more listeners, events at max capacity");
        });
    });

    describe("EventEmitter.emit(eventName[, ...args])", function() {
        let eventEmitter;

        beforeEach(function() {
            eventEmitter = new EventEmitter();
        });

        it('should not accept undefined, null, or empty eventName string', function() {
            assert.throws(()=> eventEmitter.emit(undefined), TypeError, "eventName must be a non-empty string");
            assert.throws(() => eventEmitter.emit(null), TypeError, "eventName must be a non-empty string");
            assert.throws(() => eventEmitter.emit(""), TypeError, "eventName must be a non-empty string");
        });

        it('should return false if no eventName exists', function() {
            assert.isNotTrue(eventEmitter.emit("nonExistentEventName"));
        });

        it('should return false if eventName has no listeners associated or is not array', function() {
            eventEmitter.eventsMap['emptyArr'] = [];
            eventEmitter.eventsMap['null'] = null;
            eventEmitter.eventsMap['undefined'] = undefined;
            eventEmitter.eventsMap['string'] = "listener";
            eventEmitter.eventsMap['integer'] = 123;

            assert.isNotTrue(eventEmitter.emit('emptyArr'));
            assert.isNotTrue(eventEmitter.emit('null'));
            assert.isNotTrue(eventEmitter.emit('undefined'));
            assert.isNotTrue(eventEmitter.emit('string'));
            assert.isNotTrue(eventEmitter.emit('integer'));
        });

        it('should throw error if listeners throw error', function() {
            const noArgThrowErr = () => {
                throw new Error('auto error throw');
            };
            const withArgThrowErr = (arg) => {
                if (typeof arg !== 'number') {
                    throw new Error('arg must be a number');
                }
            };

            eventEmitter.on('noArgThrowErr', noArgThrowErr);
            eventEmitter.on('withArgThrowErr', withArgThrowErr);

            assert.throws(() => eventEmitter.emit("noArgThrowErr"), Error, 'auto error throw');
            assert.throws(() => eventEmitter.emit("withArgThrowErr", '1'), Error, 'arg must be a number');
        });

        it('should call all listeners synchronously', function () {
            this.count = 0;
            const incrementer = () => {
                this.count++;
            };
            incrementer.bind(this);

            for (let i = 0; i < 1000; i++) {
                eventEmitter.on('increment', incrementer);
            }

            eventEmitter.emit('increment');
            assert.equal(this.count, 1000);
        });

    })

});