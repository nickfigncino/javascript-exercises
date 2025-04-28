const sumAll = function (start, end) {
    // Validate that inputs are numbers
    if (
        typeof start !== "number" ||
        typeof end !== "number" ||
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0
    ) {
        return "ERROR";
    }

    // Ensure start is smaller than end
    if (start > end) {
        [start, end] = [end, start]; // Swap values using destructuring
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
