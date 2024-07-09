function findNumberTarget(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		if (arr[left] + arr[right] === target) {
			return [arr[left], arr[right]];
		}
		if (arr[left] + arr[right] < target) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

console.log(findNumberTarget([1, 2, 3, 4, 6], 6));
console.log(findNumberTarget([2, 2, 4], 4));
console.log(findNumberTarget([1, 2, 3, 5], 6));
console.log(findNumberTarget([1, 1], 6));
