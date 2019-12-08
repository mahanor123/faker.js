if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');

}

describe("gender.js", function () {
    describe("gender()", function () {
        it("returns a random gender", function () {
            sinon.stub(faker.name, 'firstName').returns('foo');
            var first_name = faker.name.firstName();

            assert.equal(first_name, 'foo');

            faker.name.firstName.restore();
        });
    });
});