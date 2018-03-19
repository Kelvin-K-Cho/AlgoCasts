// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let arrayA = stringA
		.toLowerCase()
		.split('')
		.filter(char => {
			return (
				typeof char === 'string' &&
				char.length === 1 &&
				((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
			);
		});

	let arrayB = stringB
		.toLowerCase()
		.split('')
		.filter(char => {
			return (
				typeof char === 'string' &&
				char.length === 1 &&
				((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
			);
		});

	for (let char of arrayA) {
		let index = arrayB.indexOf(char);

		if (index === -1) {
			return false;
		}

		arrayB.splice(index, 1);
	}

	return arrayB.length ? false : true;
}

module.exports = anagrams;
