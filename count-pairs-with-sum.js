function countPairsWithSum(arr, target) {
	let count = 0;
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj[target - arr[i]]) {
			count++;
			obj[target - arr[i]]--;
		} else {
			obj[arr[i]] = (obj[arr[i]] || 0) + 1;
		}
	}
	return count;
}