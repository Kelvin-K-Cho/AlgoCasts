// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	if (n > 0) {
		let array = n.toString().split('');
		let result = '';
		for (let num of array) {
			result = num + result;
		}
		return parseInt(result);
	} else if (n < 0) {
		let array = Math.abs(n)
			.toString()
			.split('');
		let result = '';
		for (let num of array) {
			result = num + result;
		}
		return parseInt(result) * -1;
	} else {
		return n;
	}
}

module.exports = reverseInt;
