function countUniqueSubArrays(arr) {
	let left = 0;
	let right = 0;
	let count = 0;
	const obj = {};

	while (right < arr.length) {
		if (!obj.hasOwnProperty(arr[right]) || obj[arr[right]] < left) {
			obj[arr[right]] = right;
			count += right - left + 1;
			console.log(count, arr.slice(left, right + 1));
			right++;
		} else {
			left = obj[arr[right]] + 1;
		}
	}
	return count;
};

const arr = [1, 3, 5, 4, 7, 10, 5, 10, 11, 12, 8, 9];
console.log(countUniqueSubArrays(arr));