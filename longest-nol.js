function findLongestNol(arr) {
	let left = 0;
	let count = 0;
	let result = 0;

	for (let right = 0; right < arr.length; right++) {
		if (arr[right] === 0) {
			count++;
			result = Math.max(result, count);
		} else {
			count = 0;
		}
	}
	return result;
}

console.log(findLongestNol([0, 1, 0, 0, 1, 1, 0, 0, 0, 1]));