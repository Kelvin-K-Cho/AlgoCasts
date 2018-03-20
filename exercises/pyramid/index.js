// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	let obj = {};
	let str = '';
	let times = 2 * n - 1;

	for (let i = 0; i < times; i++) {
		str += '#';
	}

	for (let j = 0; j < n; j++) {
		obj[n - j] = str;
		str = str.slice(j + 1, str.length - j - 1);

		for (let k = n - j - 1; k < n; k++) {
			str = str + ' ';
			str = ' ' + str;
		}
	}

	for (let num in obj) {
		if (obj[num]) {
			console.log(obj[num]);
		}
	}
}

module.exports = pyramid;
