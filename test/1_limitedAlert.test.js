const assert = require('chai').assert;
const problem = require('../lib/ControllingScope');
const sinon = require('sinon');

const limitedAlert = problem.limitedAlert;

// Since alert() does not exist in Node, console.log() is used instead for testing
// Use stub for console.log() to prevent actual logging when testing

describe('limitedAlert', function() {
  describe('Correctness tests', function() {
    // Reset calledTimes after each test
    afterEach(function() {
      limitedAlert.calledTimes = 0;
    });

    it('should only console.log() 1 time with 1 call to limitedAlert()', function() {
      const expectedConsoleCount = 1;
      const times = 1;
      const consoleStub = sinon.stub(console, 'log');

      for (let count = 0; count < times; count++) {
        limitedAlert('Function called');
      }

      assert.equal(consoleStub.callCount, expectedConsoleCount);
      consoleStub.restore();
    });

    it('should only console.log() 3 times with 3 calls to limitedAlert()', function() {
      const expectedConsoleCount = 3;
      const times = 3;
      const consoleStub = sinon.stub(console, 'log');

      for (let count = 0; count < times; count++) {
        limitedAlert('Function called');
      }

      assert.equal(consoleStub.callCount, expectedConsoleCount);
      consoleStub.restore();
    });

    it('should only console.log() 3 times with 10 calls to limitedAlert()', function() {
      const expectedConsoleCount = 3;
      const times = 10;
      const consoleStub = sinon.stub(console, 'log');

      for (let count = 0; count < times; count++) {
        limitedAlert('Function called');
      }

      assert.equal(consoleStub.callCount, expectedConsoleCount);
      consoleStub.restore();
    });
  });
});
