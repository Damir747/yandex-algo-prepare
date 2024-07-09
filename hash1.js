function hash1(arr, target) {
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		const diff = target - arr[i];
		if (obj.hasOwnProperty(diff)) {
			return [obj[diff], i];
		}
		obj[arr[i]] = i;
	}
	return [];
}

console.log(hash1([2, 7, 11, 15], 9)); // [0, 1]
console.log(hash1([3, 2, 4], 6)); // [1, 2]
console.log(hash1([3, 3], 6)); // [0, 1]
