function moveZeroes(arr) {
	let left = 0;

	for (let right = 0; right < arr.length; right++) {
		if (arr[right] !== 0) {
			if (left !== right) {
				[arr[left], arr[right]] = [arr[right], arr[left]];
			}
			left++;
		}
	}
	return arr;
};

const arr = [1, 1, 0, 3, 12, 0, 0];
moveZeroes(arr);
console.log(arr); // Output: [1, 1, 3, 12, 0, 0, 0]
