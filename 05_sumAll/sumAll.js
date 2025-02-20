const sumAll = function (num1, num2) {
    let total = 0;
    if (
        num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num1) ||
        typeof num1 != "number" ||
        typeof num2 != "number"
    ) {
        return "ERROR";
    } else if (num1 < num2) {
        for (num1; num1 <= num2; num1++) {
            total += num1;
        }
        return total;
    } else if (num1 > num2) {
        for (num2; num2 <= num1; num2++) {
            total += num2;
        }
        return total;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
