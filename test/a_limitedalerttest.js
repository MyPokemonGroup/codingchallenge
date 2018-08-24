let assert = require('chai').assert;
const sinon = require('sinon');

const limitedAlert = require('./../lib/limitedalert');

describe('Limited Alert', function () {
    beforeEach(function() {
        limitedAlert.called = 0;
    });

    it("should be called 0 times when not called", function() {
        assert.equal(limitedAlert.called, 0);
    });

    it("should be called 2 times when called 2 times", function() {
        const stub = sinon.stub(console, 'log');
        for (let i = 0; i < 2; i++) {
            limitedAlert("Call Two Times");
        }
        stub.restore();
        assert.equal(limitedAlert.called, 2);
    });

    it("should only be called 3 times when called 4 times", function() {
        const stub = sinon.stub(console, 'log');
        for (let i = 0; i < 4; i++) {
            limitedAlert("Call Four Times");
        }
        stub.restore();
        assert.equal(limitedAlert.called, 3);
    });



});