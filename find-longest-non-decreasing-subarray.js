function find_longest_non_decreasing_subarray(arr) {
	let longestWay = 0;
	let currentWay = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i === 0 || arr[i] < arr[i - 1]) {
			currentWay = 1;
		} else {
			currentWay++;
		}
		if (currentWay > longestWay) {
			longestWay = currentWay;
		}
	}
	return longestWay;
};

const arr = [1, 3, 5, 4, 7, 10, 10, 11, 12, 8, 9]
console.log(find_longest_non_decreasing_subarray(arr))  // Output: 6
