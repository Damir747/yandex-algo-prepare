// два указателя
function findMaxConsecutiveChars(str) {
	let left = 0;
	let right = 0;
	let max = 0;
	let count = 0;

	while (right < str.length) {
		while (right < str.length && str[right] === str[left]) {
			right++;
			count++;
		}

		if (count > max) {
			max = count;
		}

		left = right;
		count = 0;
	}
	return max;
};

console.log(findMaxConsecutiveChars('aabcbb'));
console.log(findMaxConsecutiveChars('ab'));
console.log(findMaxConsecutiveChars('abc'));
console.log(findMaxConsecutiveChars('aa'));
console.log(findMaxConsecutiveChars('aabbcccd'));
