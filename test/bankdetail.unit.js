if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');

}

describe("bankdetail.js", function () {
    describe("firstName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'firstName').returns('foo');
            var first_name = faker.name.firstName();

            assert.equal(first_name, 'foo');

            faker.name.firstName.restore();
        });
    });

    describe("lastName()", function () {
        it("returns a random name", function () {
            sinon.stub(faker.name, 'lastName').returns('foo');

            var last_name = faker.name.lastName();

            assert.equal(last_name, 'foo');

            faker.name.lastName.restore();
        });
    });


    describe('accountNumber()', function () {

        it('should supply a default length if no length is passed', function () {

            var account =faker.bankdetail.accountnumber(0);

            var expected = 8;
            var actual = account.length;

            assert.equal(actual, expected, 'The expected default accountNumber length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a length if a length is passed', function () {

            var expected = 9;

            var account = faker.bankdetail.accountnumber(expected);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

        });

        it('should supply a default length if a zero is passed', function () {

            var expected = 8;

            var account = faker.bankdetail.accountnumber(0);

            var actual = account.length;

            assert.equal(actual, expected, 'The expected default account length is ' + expected + ' but it was ' + actual);

         });
    });
    describe('accountName()', function () {

        it("should return an account name", function () {

            var actual = faker.finance.accountName();

            assert.ok(actual);

        });

    });
    describe('routingNumber()', function () {

        it("should return a routing number", function () {

            var actual = faker.finance.routingNumber();

            assert.ok(actual);

        });

    });
});
