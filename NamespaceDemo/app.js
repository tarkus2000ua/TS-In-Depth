/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
var result1 = Utility.Fees.maxBooksAllowed(15);
console.log(result1);
var result2 = util.calculateLateFee(30);
console.log(result2);
