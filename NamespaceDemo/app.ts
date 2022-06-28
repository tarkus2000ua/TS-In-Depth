/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const result1 = Utility.Fees.maxBooksAllowed(15);
console.log(result1);

const result2 = util.calculateLateFee(30);
console.log(result2);