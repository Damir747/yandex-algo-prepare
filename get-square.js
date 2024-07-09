function getSquare(arr) {
	const result = [];
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		if (Math.abs(arr[left]) > Math.abs(arr[right])) {
			result.push(arr[left] * arr[left]);
			left++;
		} else {
			result.push(arr[right] * arr[right]);
			right--;
		}
	}
	return result.reverse();
}

console.log(getSquare([-3, -2, 0, 1, 3, 7]));