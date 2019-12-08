/**
 *
 * @namespace faker.pet
 */
function Pet (faker) {
  var Helpers = faker.helpers,
    self = this;

  /**
   *petName
   *
   * @method petName
   * @param {mixed} gender
   * @memberof faker.pet
   */
  this.petName = function (gender) {
    if (typeof faker.definitions.pet.PetName !== "undefined") {
      // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
      // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
      if (typeof gender !== 'number') {
        if(typeof faker.definitions.pet.PetName === "undefined") {
          gender = faker.random.number(1);
        }
        else {
          //Fall back to non-gendered names if they exist and gender wasn't specified
          return faker.random.arrayElement(faker.definitions.pet.PetName);
        }
      }
      if (gender === 0) {
        return faker.random.arrayElement(faker.definitions.pet.PetName)
      } 
    }
    return faker.random.arrayElement(faker.definitions.pet.PetName);
  };

  /**
   * petType
   *
   * @method faker.pet.petType
   */
  self.petType = function () {
    return Helpers.randomize(faker.definitions.pet.petType);
};

  /**
   * petColor
   *
   * @method faker.pet.petColor
   */
  self.petColor = function() {
    return faker.random.arrayElement(faker.definitions.pet.petColor);
};
}

module['exports'] = Pet;