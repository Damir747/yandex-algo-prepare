function hasSubarrayWithSum(arr, target) {
	let left = 0;
	let sum = 0;

	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		while (sum > target && left <= right) {
			sum -= arr[left];
			left++;
		}
		if (sum === target) {
			return true;
		}
	}
	return false;
}

// Примеры использования:
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 9)); // true (4+5)
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 15)); // true (1+2+3+4+5)
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 11)); // false
