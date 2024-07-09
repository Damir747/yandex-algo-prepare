function findSubArrayTarget(arr, target) {
	let left = 0;
	let sum = 0;
	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		while (sum > target && left < right) {
			sum -= arr[left];
			left++;
		}
		if (sum === target) {
			return arr.slice(left, right + 1);
		}
	}
	return [];
}
console.log(findSubArrayTarget([1, 2, 3, 4, 5], 6));
console.log(findSubArrayTarget([1, 2, 3, 4, 5], 9));
console.log(findSubArrayTarget([1, 2, 3, 4, 5], 15));
console.log(findSubArrayTarget([1, 2, 3, 4, 5], 10));
console.log(findSubArrayTarget([1, 2, 3, 4, 5], 11));
console.log(findSubArrayTarget([5], 5));
