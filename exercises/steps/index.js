// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let count = 0;
	let string = '';

	for (let i = 0; i < n; i++) {
		string += ' ';
	}

	while (count < n) {
		let array = string.split('');
		array.pop(' ');
		array.unshift('#');
		string = array.join('');
		console.log(string);
		count++;
	}
}

module.exports = steps;
