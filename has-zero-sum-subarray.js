function hasZeroSumSubarray(arr) {
	const prefSum = new Set();
	let sum = 0;

	for (const el of arr) {
		sum += el;
		console.log(sum);
		if (sum === 0 || prefSum.has(sum)) {
			return true;
		}
		prefSum.add(-sum);
		console.log(prefSum);
	}
	return false;
}

// console.log(hasZeroSumSubarray([1, 2, -3, 4, 5])); // true
// console.log(hasZeroSumSubarray([1, 2, 3, 4, 5])); // false
console.log(hasZeroSumSubarray([3, 4, -5, 1, -4, -1])); // true