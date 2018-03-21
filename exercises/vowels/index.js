// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let vowelObj = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true,
		A: true,
		E: true,
		I: true,
		O: true,
		U: true
	};

	let count = 0;

	let string = str.split('').filter(char => {
		return char >= 'A' && char <= 'z';
	});

	for (let elem of string) {
		if (vowelObj[elem]) {
			count++;
		}
	}

	return count;
}

module.exports = vowels;
