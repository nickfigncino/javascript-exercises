const palindromes = function (str) {
	// Clean the string by converting to lowercase and removing all non-alphanumeric characters
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	// Reverse the cleaned string
	const reversed = cleaned.split("").reverse().join("");

	// Check if the cleaned string equals its reverse
	return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
