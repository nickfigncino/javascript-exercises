const leapYears = function (year) {
	const numericYear = Number(year);

	// Basic validation (optional, but good practice)
	if (
		isNaN(numericYear) ||
		!Number.isInteger(numericYear) ||
		numericYear <= 0
	) {
		console.warn(`Input "${year}" is not a valid positive integer year.`);
		return false; // Or you could throw an error
	}

	// Apply the leap year rules:
	// 1. Divisible by 4?
	// 2. AND Not divisible by 100? OR (overrides rule 2) Divisible by 400?
	return (
		(numericYear % 4 === 0 && numericYear % 100 !== 0) ||
		numericYear % 400 === 0
	);
};

// Do not edit below this line
module.exports = leapYears;
