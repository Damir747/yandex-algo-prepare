function generate(n) {
	const result = [];

	function generate_(left_open, left_closed, acc) {
		if (left_open === 0 && left_closed === 0) {
			result.push(acc.join(''));
			return;
		}
		if (left_open > 0) {
			acc.push('(');
			generate_(left_open - 1, left_closed, acc);
			acc.pop();
		}
		if (left_closed > left_open) {
			acc.push(')');
			generate_(left_open, left_closed - 1, acc);
			acc.pop();
		}
	}

	generate_(n, n, []);
	return result;
}

// Пример использования
const n = 3;
console.log(generate(n)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
