var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            var fee = daysLate * 0.25;
            return fee;
        }
        Fees.calculateLateFee = calculateLateFee;
        function maxBooksAllowed(age) {
            if (age < 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.maxBooksAllowed = maxBooksAllowed;
        function privateFunc() {
            console.log('This is a private function');
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
