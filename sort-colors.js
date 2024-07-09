function sortColors(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (arr[left] === 'R') {
		left++;
	}
	while (arr[right] === 'B') {
		right--;
	}

	let current = left;
	while (current <= right) {
		if (arr[current] === 'R') {
			[arr[left], arr[current]] = [arr[current], arr[left]];
			left++;
			current++;
		} else {
			if (arr[current] === 'B') {
				[arr[current], arr[right]] = [arr[right], arr[current]];
				right--;
			} else {
				current++;
			}
		}
	}
	return arr;
};

const colors = ['R', 'B', 'G', 'B', 'R', 'R', 'B', 'G'];

console.log(sortColors(colors)); // Должно вывести ['R', 'R', 'R', 'G', 'G', 'B', 'B']
