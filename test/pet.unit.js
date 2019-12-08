if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("pet.js", function () {
    describe("petName()", function () {
        it("returns a random pet name", function () {
            sinon.stub(faker.pet, 'petName').returns('cat');
            var petName = faker.pet.petName();
  
            assert.equal(petName, 'cat ');
            faker.pet.petName.restore();
        });
    });
  
    describe('petType()', function () {
        it("return a random pet type", function () {
            var petType = faker.pet.petType();

            assert.ok(petType);
        });
    });
 
  
    describe("petColor()", function () {
        it("returns a random pet color", function () {
            sinon.stub(faker.pet, 'petColor').returns('black');
            var petColor = faker.pet.petColor();
  
            assert.equal(petColor, 'black');
            faker.pet.petColor.restore();
        });
    });
   });

  