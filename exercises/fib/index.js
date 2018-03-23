// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, obj) {
	obj = obj || {
		0: 0,
		1: 1
	};

	if (n === 0 || obj[n]) {
		return obj[n];
	}

	let answer = fib(n - 1, obj) + fib(n - 2, obj);
	obj[n] = answer;
	return answer;
}

module.exports = fib;
