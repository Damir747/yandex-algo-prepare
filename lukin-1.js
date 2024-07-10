function findSum(arr, target) {
	const set = new Set();

	for (let i = 0; i < arr.length; i++) {
		const diff = target - arr[i];
		if (set.has(diff)) {
			return [diff, arr[i]];
		}

		set.add(arr[i]);
	}
	return [];
}
console.log(findSum([-3, 0, 2, 4, 5], 6));
console.log(findSum([1, 2, 3, 4, 5], 9));

// https://www.youtube.com/watch?v=JtMuXmmDl9s&list=WL&index=43