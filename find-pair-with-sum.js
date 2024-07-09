function findPairWithSum(arr, sum) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] + arr[right] === sum) {
			return [arr[left], arr[right]];
		} else if (arr[left] + arr[right] < sum) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

console.log(findPairWithSum([1, 2, 3, 4, 6], 6)); // 
