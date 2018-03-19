// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let obj = {};
	let maxValue = 0;
	let maxKey = '';

	for (let char of str) {
		if (!obj[char]) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}

		if (obj[char] > maxValue) {
			maxValue = obj[char];
			maxKey = char;
		}
	}

	return maxKey;
}

module.exports = maxChar;
