function maxLengthSubarray(arr, target) {
	let left = 0;
	let right = 0;
	let sum = 0;
	let max = 0;
	let result = [];

	while (right < arr.length) {
		sum += arr[right];
		while (sum > target) {
			sum -= arr[left];
			left++;
		}

		if (sum <= target && max < right - left + 1) {
			max = right - left + 1;
			result = arr.slice(left, right + 1);
		}
		right++;

	}

	console.log(result);
	return max;
}

const arr = [1, 2, 1, 0, 1, 1, 0];
const k = 4;
console.log(maxLengthSubarray(arr, k)); // Output: 5
