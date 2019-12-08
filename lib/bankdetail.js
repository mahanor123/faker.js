/**
 *
 * @namespace faker.bankdetail
 */
function BankDetail (faker) {
  var Helpers = faker.helpers,
      self = this;
    /**
     * firstName
     *
     * @method firstName
     * @param {mixed} gender
     * @memberof faker.bankdetail
     */
    this.firstName = function (gender) {
      if (typeof faker.definitions.name.male_first_name !== "undefined" && typeof faker.definitions.name.female_first_name !== "undefined") {
        // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
        // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
        if (typeof gender !== 'number') {
          if(typeof faker.definitions.name.first_name === "undefined") {
            gender = faker.random.number(1);
          }
          else {
            //Fall back to non-gendered names if they exist and gender wasn't specified
            return faker.random.arrayElement(faker.definitions.name.first_name);
          }
        }
        if (gender === 0) {
          return faker.random.arrayElement(faker.definitions.name.male_first_name)
        } else {
          return faker.random.arrayElement(faker.definitions.name.female_first_name);
        }
      }
      return faker.random.arrayElement(faker.definitions.name.first_name);
    };

 /**
   * lastName
   *
   * @method lastName
   * @param {mixed} gender
   * @memberof faker.bankdetail
   */
  this.lastName = function (gender) {
    if (typeof faker.definitions.name.male_last_name !== "undefined" && typeof faker.definitions.name.female_last_name !== "undefined") {
      // some locale datasets ( like ru ) have last_name split by gender. i have no idea how last names can have genders, but also i do not speak russian
      // see above comment of firstName method
      if (typeof gender !== 'number') {
        gender = faker.random.number(1);
      }
      if (gender === 0) {
        return faker.random.arrayElement(faker.locales[faker.locale].name.male_last_name);
      } else {
        return faker.random.arrayElement(faker.locales[faker.locale].name.female_last_name);
      }
    }
    return faker.random.arrayElement(faker.definitions.name.last_name);
  };


/**
   * gender
   *
   * @method gender
   * @memberof faker.bankdetail
   */
  this.gender = function () {
    return faker.random.arrayElement(faker.definitions.name.gender);
  }


  /**
   * accountNumber
   *
   * @method faker.bankdetail.accountnumber
   * @param {number} length
   */
  self.accountnumber = function (length) {

    length = length || 8;

    var template = '';

    for (var i = 0; i < length; i++) {
        template = template + '#';
    }
    length = null;
    return Helpers.replaceSymbolWithNumber(template);
};
  /**
     * accountName
     *
     * @method faker.bankdetail.accountName
     */
    self.accountName = function () {

      return [Helpers.randomize(faker.definitions.finance.account_type), 'Account'].join(' ');
  };
  /**
   * routingNumber
   *
   * @method faker.bankdetail.routingNumber
   */
  self.routingNumber = function () {

    var routingNumber = Helpers.replaceSymbolWithNumber('########');

    // Modules 10 straight summation.
    var sum = 0;

    for (var i = 0; i < routingNumber.length; i += 3) {
      sum += Number(routingNumber[i]) * 3;
      sum += Number(routingNumber[i + 1]) * 7;
      sum += Number(routingNumber[i + 2]) || 0;
    }

    return routingNumber + (Math.ceil(sum / 10) * 10 - sum);
}  
}

module['exports'] = BankDetail;