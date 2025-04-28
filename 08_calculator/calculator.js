const add = function () {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
};

const subtract = function () {
	let difference = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		difference -= arguments[i];
	}
	return difference;
};

const sum = function () {
	if (arguments.length === 0) return 0;
	let total = 0;
	const args = arguments[0];
	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	return total;
};

const multiply = function () {
	let product = 1;
	const args = arguments[0];
	for (let i = 0; i < args.length; i++) {
		product *= args[i];
	}
	return product;
};

const power = function () {
	const base = arguments[0];
	const exponent = arguments[1];
	return Math.pow(base, exponent);
};

const factorial = function () {
	const num = arguments[0];
	if (num === 0) return 1;
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
