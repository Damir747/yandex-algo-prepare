function lengthOfLongestSubstring(str) {
	const obj = {};
	let max = 0;
	let left = 0;

	for (let right = 0; right < str.length; right++) {
		const char = str[right];
		if (obj[char] !== undefined && obj[char] >= left) {
			left = obj[char] + 1;
		}
		obj[char] = right;
		max = Math.max(max, right - left + 1);
	}
	return max;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Ожидаемый результат: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Ожидаемый результат: 1
console.log(lengthOfLongestSubstring("abba")); // Ожидаемый результат: 2
